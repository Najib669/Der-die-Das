import React, { useState } from 'react';
import './Quiz.css'; // Import the CSS file for styling

const questions = [
  {
    question: 'Die Hauptstadt von Deutschland ist ____.',
    correctAnswer: 'Berlin',
  },
  {
    question: 'In Deutschland spricht man ____.',
    correctAnswer: 'Deutsch',
  },
  {
    question: 'Das deutsche Wort für "car" ist ____.',
    correctAnswer: 'Auto',
  },
  {
    question: 'Wie sagt man "hello" auf Deutsch?',
    correctAnswer: 'Hallo',
  },
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(true);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleNextQuestion = () => {
    const correctAnswer = questions[currentQuestion].correctAnswer.toLowerCase();

    if (userAnswer.toLowerCase() === correctAnswer) {
      setScore(score + 1);
    }

    setUserAnswer('');
    setIsAnswerCorrect(true);

    // Move to the next question or finish the quiz
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setUserAnswer('');
    setIsAnswerCorrect(true);
    setQuizCompleted(false);
  };

  const currentQuiz = questions[currentQuestion];

  return (
    <div className={`App ${quizCompleted ? 'quiz-completed' : ''}`} onClick={quizCompleted ? restartQuiz : null}>
      <div className="quiz-container">
        <h1 className="quiz-title">German Fill in the Blank Quiz</h1>
        {quizCompleted ? (
          <div className="quiz-completed">
            <h2 className="quiz-completed-title">Quiz Completed!</h2>
            <p className="score">Your Score: {score} / {questions.length}</p>
            <p>Click anywhere to restart</p>
          </div>
        ) : (
          <div className="question-container">
            <p className="question">{currentQuiz.question}</p>
            <input
              type="text"
              placeholder="Enter your answer"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              className={`answer-input ${isAnswerCorrect ? '' : 'incorrect'}`}
            />
            <button onClick={handleNextQuestion} className="submit-button">
              {currentQuestion === questions.length - 1 ? 'Finish' : 'Next'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

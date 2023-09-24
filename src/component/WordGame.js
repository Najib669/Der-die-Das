import React, { useState } from 'react';
import './WordGame.css';

const words = [
  { word: 'Auto', article: 'das' },
  { word: 'Haus', article: 'das' },
  { word: 'Buch', article: 'das' },
  { word: 'Stuhl', article: 'der' },
  { word: 'Tisch', article: 'der' },
  { word: 'Blume', article: 'die' },
  { word: 'Straße', article: 'die' },
  { word: 'Katze', article: 'die' },
];

function WordGame() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [score, setScore] = useState(0);

  const currentWord = words[currentWordIndex];

  const handleAnswer = (chosenArticle) => {
    if (chosenArticle === currentWord.article) {
      setScore(score + 1);
    }

    if (currentWordIndex < words.length - 1) {
      setCurrentWordIndex(currentWordIndex + 1);
    }
  };

  return (
    <div className="word-game-container">
      <h1 className="word-game-title">Der, Die, Das Word Game</h1>
      {currentWordIndex < words.length ? (
        <div className="word-container">
          <p className="word">{currentWord.word}</p>
          <div className="article-options">
            <button onClick={() => handleAnswer('der')}>der</button>
            <button onClick={() => handleAnswer('die')}>die</button>
            <button onClick={() => handleAnswer('das')}>das</button>
          </div>
        </div>
      ) : (
        <div className="game-completed">
          <h2 className="game-completed-title">Game Completed!</h2>
          <p className="score">Your Score: {score} / {words.length}</p>
        </div>
      )}
    </div>
  );
}

export default WordGame;

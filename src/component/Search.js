// SearchInput.js
import React, { Component } from "react";
import "./Search.css"; // Import the CSS file for styling

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
    };
  }

  handleInputChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  handleSearch = () => {
    // Implement your search logic here, e.g., call an API or perform a search action
    console.log(`Searching for: ${this.state.searchTerm}`);
  };

  render() {
    return (
      <div className="search-container">
        <input
          type="text"
          placeholder="Add Your German word..."
          value={this.state.searchTerm}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleSearch}>Search</button>
      </div>
    );
  }
}

export default Search;

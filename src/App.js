import { Component } from "react";

import "./App.css";
import CardList from "./components/card-list/card-list-component";
import SearchBar from "./components/SearchBar/search-component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  onSearchChange = (event) => {
    console.log({ startingArray: this.state.monsters });
    console.log(event.target.value);
    const searchField = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(this.state.searchField);
    });

    return (
      <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>

        <SearchBar
          onChange={ this.onSearchChange }
          placeholder="Search monsters"
          className="monsters-search-box"
        />
        <CardList monsters={ filteredMonsters } />
      </div>
    );
  }
}

export default App;

// <header className="App-header">
// <img src={logo} className="App-logo" alt="logo" />
// <p>Hi {this.state.name.firstname} {this.state.name.lastname}, I work at {this.state.company}</p>
// <button
//   onClick={() => {
//     this.setState(() => {
//       return {
//         name: {firstname: 'Anthony', lastname: 'Iheanaetu'}
//       }
//     }, () => { console.log(this.state) });

//   }}
// >
//   Change Name
// </button>
// </header>

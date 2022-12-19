import { useState, useEffect } from "react";

import "./App.css";
import CardList from "./components/card-list/card-list-component";
import SearchBar from "./components/SearchBar/search-component";

const App = () => {
  console.log("render");
  const [searchField, setSearchField] = useState(""); // [value, setValue]

  const [monsters, setMonsters] = useState([]);

  const [filteredMonsters, setFilteredMonsters] = useState(monsters)

  console.log("render");

  useEffect(() => {
    console.log('effect')
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => setMonsters(users));
  }, [])

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>

      <SearchBar
        onChange={onSearchChange}
        placeholder="Search monsters"
        className="monsters-search-box"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;

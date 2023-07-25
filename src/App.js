import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
import { useState } from 'react';
import SearchBar from './components/SearchBar.jsx';

function App() {
  const [characters, setCharacters] = useState([]);
  const onSearch = (event) => {
    setCharacters([...characters, useState]);
  };
  console.log(characters);
  return (
    <div className="App">
      <Nav onSearch={onSearch}></Nav>

      <Cards characters={onSearch} />
    </div>
  );
}

export default App;

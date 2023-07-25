const SearchBar = ({ onSearch }) => {
  return (
    <div>
      <input type="search" onChange={(e) => onSearch(e.target.value)} />
      <button onClick={onSearch}>Agregar</button>
    </div>
  );
};

export default SearchBar;

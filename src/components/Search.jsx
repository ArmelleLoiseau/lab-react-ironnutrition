import React from 'react';

const Search = ({ searchedString, setSearchedString }) => {
  return (
    <div>
      <input
        type="text"
        className="input search-bar"
        name="search"
        placeholder="Search"
        value={searchedString}
        onChange={(e) => setSearchedString(e.target.value)}
      ></input>
    </div>
  );
};

export default Search;

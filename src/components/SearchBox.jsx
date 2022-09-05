import React from 'react';
import './SearchBox.css'
function SearchBox(props) {
  return (
    <div className='container-fluid col col-3' id="searchBoxContainer">
      <input
        id='searchBox'
        class='form-control'
        placeholder='Search'
        onChange={(e) => props.setSearchValue(e.target.value)}
      />
    </div>
  );
}

export default SearchBox;

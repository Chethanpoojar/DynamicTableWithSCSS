import React, { useState } from "react";

function TableSearch({ columns, data, onSearch }) {
  const [searchText, setSearchText] = useState("");
  const [searchColumn, setSearchColumn] = useState(columns[0]);

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchText(event.target.value);
    onSearch(event.target.value, searchColumn);
  };

  return (
    <div className="table-search">
      <input
        type="text"
        className="input"
        placeholder={`Search by ${searchColumn}`}
        value={searchText}
        onChange={handleSearch}
      />

      <select
        id="search-column"
        className="select"
        value={searchColumn}
        onChange={(event) => setSearchColumn(event.target.value)}
      >
        {columns.map((column) => (
          <option key={column} value={column}>
            {column}
          </option>
        ))}
      </select>
    </div>
  );
}

export default TableSearch;

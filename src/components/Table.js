import React, { useState, useMemo, useEffect } from "react";
import TableRow from "./TableRow";
import TableHeader from "./TableHeader";
import TablePagination from "./TablePagination";
import "./table.scss";
import TableSearch from "./TableSearch";

const Table = ({ data, columns, itemsPerPage = 5 }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (pageNumber) => {
    // window.alert(pageNumber)
    setCurrentPage(pageNumber);
  };

  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  let dataSlice = data.slice(start, end);

  const [filteredData, setFilteredData] = useState();

  useEffect(() => {
    setFilteredData(dataSlice)
  }, [currentPage])
  

  const handleSearch = (searchText, searchColumn) => {
    const filtered = dataSlice.filter((item) =>
      item[searchColumn].toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <div className="table">
      <TableSearch columns={columns} data={dataSlice} onSearch={handleSearch} />
      <TableHeader columns={columns} />
      {filteredData?.map((row, index) => (
        <TableRow key={index} data={row} columns={columns} />
      ))}
      <TablePagination
        currentPage={currentPage}
        totalPages={Math.ceil(data.length / itemsPerPage)}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Table;

import React from "react";
import "./table.scss";

const TableRow = ({ data, columns }) => (
  <div className="table-row">
    {columns.map((column) => (
      <div key={column} className="table-cell" style={{ width: `calc(100% / ${columns?.length}` }}>
        {data[column]}
      </div>
    ))}
  </div>
);

export default TableRow;

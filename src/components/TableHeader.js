import React from "react";
import './table.scss';

const TableHeader = ({ columns }) => (
  <div className="table-header" >
    {columns?.map((column) => (
      <div key={column} className="table-cell" style={{ width: `calc(100% / ${columns?.length}` }}>
        {column}
      </div>
    ))}
  </div>
);

export default TableHeader;

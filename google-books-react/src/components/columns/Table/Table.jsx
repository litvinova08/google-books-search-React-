import React, { useMemo } from "react";
// import { useTable } from "react-table";
import { useTable } from "react-table/dist/react-table.development";
import { useEffect, useState } from "react";
import { COLUMNS } from "./Columns";
import styles from "./Table.module.scss";
import MOCK_DATA from "./../../../assets/MOCK_DATA.json";

const Table = ({ books }) => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => books, []);

  const tableInstance = useTable({
    columns,
    data,
  });

  //destructuring table instance
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;

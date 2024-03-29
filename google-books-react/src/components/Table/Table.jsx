import React, { useMemo } from "react";
import { useTable, useSortBy } from "react-table/dist/react-table.development";
import { COLUMNS } from "./Columns";
import styles from "./../Table/Table.module.scss";
import Search from "../Search/Search";

const Table = ({ books }) => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => books, []);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useSortBy
  );

  //destructuring table instance
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    // <div>
    //   <Search></Search>
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render("Header")}
                <span>
                  {column.isSorted
                    ? column.isSortedDesc
                      ? " (B -> A)"
                      : " (A -> B)"
                    : ""}
                </span>
              </th>
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
    // </div>
  );
};

export default Table;

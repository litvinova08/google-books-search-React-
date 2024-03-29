import { NavLink } from "react-router-dom";
import { urls } from "./../../assets/values";
import BookCard from "../BookCard/BookCard";

//labels for each column
export const COLUMNS = [
  {
    Header: "Title",
    accessor: "volumeInfo.title",
  },
  {
    Header: "Authors",
    accessor: "volumeInfo.authors",
  },
  {
    Header: "Published Date",
    accessor: "volumeInfo.publishedDate",
  },
  {
    Header: "",
    accessor: "id",
    Cell: (props) => <a href={props.value}>More Details</a>,
  },
];

import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Table from "../Table/Table";
import Nav from "../Nav/Nav";

const Search = () => {
  const [loadingData, setLoadingdata] = useState(true);

  const [searchTerm, setSearchTerm] = useState("");

  const [searchBooks, setSearchBooks] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    setSearchTerm(formJson.search);
  }

  useEffect(() => {
    const getData = async () => {
      await axios
        .get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`)
        .then((response) => {
          console.log(response.data.items);
          setSearchBooks(response.data.items);
          console.log(searchTerm);
          setLoadingdata(false);
        });
    };
    if (loadingData) {
      getData();
    }
  }, [searchTerm]);

  return (
    <div>
      <Nav />
      <form method="post" onSubmit={handleSubmit}>
        Book Search: <input name="search" placeholder="type a book title" />
        <button type="submit">Search a book</button>
      </form>
      <div>
        {loadingData ? (
          <p>The table will be displayed here</p>
        ) : (
          <Table books={searchBooks} />
        )}
      </div>
    </div>
  );
};

export default Search;

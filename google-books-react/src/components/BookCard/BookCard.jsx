import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { urls } from "./../../assets/values";
import { NavLink, useParams } from "react-router-dom";

const BookCard = () => {
  const { id } = useParams();

  const [loadingData, setLoadingdata] = useState(true);

  const [book, setBook] = useState([]);

  useEffect(() => {
    const getData = async () => {
      await axios
        .get(`https://www.googleapis.com/books/v1/volumes/${id}`)
        .then((response) => {
          console.log(response.data);
          setBook(response.data);
          setLoadingdata(false);
        });
    };
    if (loadingData) {
      getData();
    }
  }, []);

  return loadingData ? (
    <p>Please, wait</p>
  ) : (
    <div>
      Book
      <NavLink to={`/${id}`}></NavLink>
      <h3>Book Title: {book.volumeInfo.title}</h3>
      <p>Book Authors: {book.volumeInfo.authors}</p>
      <img src={book.volumeInfo.imageLinks.small}></img>
      <p>Description: {book.volumeInfo.description}</p>
    </div>
  );
};

export default BookCard;

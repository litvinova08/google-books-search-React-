import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Table from "./components/Table/Table";
import BookCard from "./components/BookCard/BookCard";

function App() {
  const [loadingData, setLoadingdata] = useState(true);

  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getData = async () => {
      await axios
        .get("https://www.googleapis.com/books/v1/volumes?q=flowers")
        .then((response) => {
          console.log(response.data.items);
          setBooks(response.data.items);
          setLoadingdata(false);
        });
    };
    if (loadingData) {
      getData();
    }
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              loadingData ? <p>Please, wait</p> : <Table books={books} />
            }
          ></Route>
          <Route path="/:id" element={<BookCard />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

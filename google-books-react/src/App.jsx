import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Table from "./components/columns/Table/Table";

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
    <div>{loadingData ? <p>Please, wait</p> : <Table books={books} />}</div>
  );
}

export default App;

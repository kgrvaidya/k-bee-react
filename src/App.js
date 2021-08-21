import './App.css';
import React, { Suspense, useState, useRef, useEffect, useCallback } from "react";
import useFetch from "./utils/customFetch";
import { AlbumList } from './components';


function App() {

const [page, setPage] = useState(1);
const { loading, error, formattedList = [] } = useFetch(page, 'https://jsonplaceholder.typicode.com/albums');

const row = useRef(null);

const handleObserver = useCallback((entries) => {
  const target = entries[0];
  if (target.isIntersecting) {
    setPage((prev) => prev + 1);
  }
}, []);

useEffect(() => {
  const option = {
    root: null,
    rootMargin: "20px",
    threshold: 0
  };
  const observer = new IntersectionObserver(handleObserver, option);
  if (row.current) observer.observe(row.current);
}, [handleObserver]);

  return (
    <div className="App">
      <Suspense fallback={<div>Loading</div>}>
        <AlbumList label="Component 1" albums={formattedList} />
      </Suspense>
      {loading && <p>Loading...</p>}
      {error && <p>Error!</p>}
      <div ref={row} />
    </div>
  );
}

export default App;

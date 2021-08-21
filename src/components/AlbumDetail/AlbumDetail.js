import './AlbumDetail.css';
import React, { useState, useRef, useEffect, useCallback } from "react";
import useFetch from "../../utils/customFetch";

const AlbumDetail =  (props) => {

  let albumId = props.albumId ? props.albumId : 1

  const [page, setPage] = useState(1);
  const { loading, error, formattedList = [] } = useFetch(page, 'https://jsonplaceholder.typicode.com/photos?albumId=' + albumId);

  const columns = useRef(null);

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
    if (columns.current) observer.observe(columns.current);
  }, [handleObserver]);
  
  return (
    <>
      {formattedList && formattedList.length > 0 && (
        formattedList.map((album, index) => {
          return (
          <div className="album-info-container" key={index}>
            <img className="album-cover" src={album.thumbnailUrl} alt={album.title} />
            <span className="detail-text">
              {album.title}
            </span>
            <span className="detail-text">
              Id : {album.id}
            </span>
          </div>)
        })
      )}
      {loading && <p>Loading...</p>}
      {error && <p>Error!</p>}
      <div ref={columns} />
    </>
  );
}

export default AlbumDetail;

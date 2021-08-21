import './AlbumDetail.css';
import { useEffect, useState, useCallback, useRef } from "react";
import axios from 'axios'

const AlbumDetail =  () => {
  const loader = useRef(null);
  const [albuminfo, setAlbumInfo] = useState([])
  const [filteredAlbumInfo, setFilteredAlbumInfo] = useState([])


  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      // setPage((prev) => prev + 1);
       if( filteredAlbumInfo.length !== albuminfo) {
        //set extra album info from current album info list
        let filteredData = albuminfo.slice(0, albuminfo.length + 10)
        setFilteredAlbumInfo([...filteredData]) 
      }
    }
  }, []);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "20px",
      threshold: 0
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);

   if(albuminfo && albuminfo.length === 0) {
      axios.get('https://jsonplaceholder.typicode.com/photos?albumId=1')
      .then(res => {
        if(res.data && res.data.length > 0) {
          setAlbumInfo(res.data)
        }

      })
      .catch((err) => {
        console.log(err)
      })
   }
  //  else if( filteredAlbumInfo.length !== albuminfo) {
  //    //set extra album info from current album info list
  //    let filteredData = albuminfo.slice(0, albuminfo.length + 10)
  //    setFilteredAlbumInfo([...filteredData]) 
  //  }

  
  }, [handleObserver])



  
  return (
    <>
      {albuminfo && albuminfo.length > 0 && (
        albuminfo.map((album, index) => {
          return (
          <div className="album-info-container" key={index}>
            <img className="album-cover" src={album.thumbnailUrl} alt={album.title} />
            <h4>
              {album.title}
            </h4>
            <h4>
              {album.id}
            </h4>
          </div>)
        })
      )}
    </>
  );
}

export default AlbumDetail;

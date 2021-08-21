import './AlbumDetail.css';
import { useEffect, useState } from "react";
import axios from 'axios'

const AlbumDetail =  () => {

  const [albuminfo, setAlbumInfo] = useState([])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/photos?albumId=1')
    .then(res => {
      if(res.data && res.data.length > 0) {
        setAlbumInfo(res.data)
      }

    })
    .catch((err) => {
      console.log(err)
    })
  
  }, [])
  
  return (
    <>
      {albuminfo && albuminfo.length > 0 && (
        albuminfo.map(album => {
          return (
          <div className="album-info-container">
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

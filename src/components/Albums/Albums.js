import './Albums.css';
import React, { Suspense, useEffect, useState } from "react";
import axios from 'axios'

import { AlbumDetail } from '../index';


const AlbumsList =  () => {

  const [albums, setAlbums] = useState([])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/albums')
    .then(res => {
      if(res.data && res.data.length > 0) {
        setAlbums(res.data)
      }

    })
    .catch((err) => {
      console.log(err)
    })
  
  }, [])
  return (
    <div className="album-row">
      <Suspense fallback={<div>Loading</div>}>
      {albums && albums.length > 0 && (
        albums.map((album, index) => {
          return (
          <div className="album-container" key={index}>
            <div className="album-header">
              <h2>
                {album.title}
              </h2>
              <div>
                Id : {album.id}
                userid : {album.userId}
              </div>
            </div>
            <div className="album-detail">
              <AlbumDetail label="Album Detail" albumId={album.id} />
            </div>
          </div>)
        })
      )}
      </Suspense>
    </div>
  );
}

export default AlbumsList;

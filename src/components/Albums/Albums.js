import './Albums.css';
import React, { Suspense} from "react";

import { AlbumDetail } from '../index';

const AlbumsList =  (props) => {
  console.log(props)

  let albums = props.albums

  return (
    <div className="album-row">
      <Suspense fallback={<div>Loading...</div>}>
      {albums && albums.length > 0 && (
        albums.map((album, index) => {
          return (
          <div className="album-container" key={index}>
            <div className="album-header">
              <span className="album-title">
                {album.title}
              </span>
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

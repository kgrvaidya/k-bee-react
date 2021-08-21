import React from "react";


export const AlbumList = React.lazy(
  () =>
    new Promise((resolve, reject) =>
      setTimeout(() => resolve(import("./Albums/Albums")), 100)
    )
);
/* wait 500 ms to render component */
export const AlbumDetail = React.lazy(
  () =>
    new Promise((resolve, reject) =>
      setTimeout(() => resolve(import("./AlbumDetail/AlbumDetail")), 5000)
    )
);

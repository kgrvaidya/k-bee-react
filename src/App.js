import './App.css';
import React, { Suspense } from "react";

import { AlbumList } from './components';


function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading</div>}>
        <AlbumList label="Component 1" />
      </Suspense>

    </div>
  );
}

export default App;

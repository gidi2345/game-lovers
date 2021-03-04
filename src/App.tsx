import React from 'react';
import './App.css';
import {Welcome} from "./pages/splash-page/SplashPage";

function App() {
  return (
    <div style={{height:'100%', margin: 0, background: 'red'}}>
      <Welcome name={'gidi'}></Welcome>
    </div>
  );
}

export default App;

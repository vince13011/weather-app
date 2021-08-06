import React, { useState, useEffect } from "react";
import "./App.css";
import getWeather from "./axios/getWeather";



function App() {
  const [weather, setWeather] = useState<Promise<any>>();

  useEffect( 
    () => {
    setWeather( getWeather('Marseille'));
  }, []);

  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

export default App;

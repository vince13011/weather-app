import React, { useState, useEffect } from "react";
import "./App.css";
import getWeather from './axios/getWeather';

function App() {


  const [weather, setWeather] = useState<Promise<any>>();

  const init = async () => {
    const weatherData= await getWeather('Marseille');
    console.log('weatherdata: ',weatherData)
    await setWeather(weatherData)
    console.log('weather: ',weather)
  };

  useEffect(() => {
   init()
   console.log('weather: ',weather)
  }, []);

  return (
    <div className="App">
      
     <h1>Hello</h1>
      
    </div>
  );
}

export default App;

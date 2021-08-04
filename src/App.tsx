import React, { useState, useEffect } from "react";
import "./App.css";
import getWeather from './axios/getWeather';


export const init = async (setelement: React.Dispatch<React.SetStateAction<Promise<any> | undefined>>) => {
    const weatherData= await getWeather('Marseille');
    console.log('weatherdata: ',weatherData)
    await setelement(weatherData)  };


function App() {


  const [weather, setWeather] = useState<Promise<any>>();

   

  useEffect(() => {
   init(setWeather)
   console.log('weather: ',weather)
  }, []);

  return (
    <div className="App">
      
     <h1>Hello</h1>
      
    </div>
  );
}

export default App;

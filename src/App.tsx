import React, { useState, useEffect } from "react";
import "./App.css";
import getWeather from "./axios/getWeather";
import Header from "./Header";
import Main from "./Main";
import { IWeather } from "./interfaces/interfaces";

function App() {
  const [weather, setWeather] = useState<Promise<IWeather>|undefined>();

  useEffect(() => {
    const data = getWeather("Marseille")
                .then((response) =>setWeather(response)
    );
  }, []);

  return (
    <div className="App" style={{ contain: "content" }}>
      <Header setWeather={setWeather} />
      <Main weather={weather} />
    </div>
  );
}

export default App;

import React from 'react';
import { IWeather } from './interfaces/interfaces';



interface IProps{
    weather: IWeather | undefined,
}


const Main:React.FC<IProps>= ({weather})=> {

    return (
   
      <div >
    {weather ?
    <h1>{weather.location.name}</h1>
        
     : ""}
      </div>
     
    );
  }
    
  export default Main
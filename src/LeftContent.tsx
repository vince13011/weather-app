import React from 'react';
import imageWeather from './assets/prevision-meteo.jpg'

import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import { IWeather } from './interfaces/interfaces';


interface IProps{
    weather: IWeather |undefined;
}

const useStyles = makeStyles((theme) => ({

    media: {
      height: '100%',
      width:'auto',
      paddingTop: '56.25%', // 16:9
      backgroundPositionY:'-300px'
    },
}))
  

const LeftContent:React.FC<IProps>=({weather})=>{
    const classes = useStyles();
   
    
return(
    
<CardMedia
        className={classes.media}
        image={imageWeather}
        title="sky"
      />
      
)
}

export default LeftContent;

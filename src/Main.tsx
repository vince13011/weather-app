import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { IWeather } from './interfaces/interfaces';
import RightContent from './RightContent';
import LeftContent from './LeftContent'


interface IProps{
    weather: IWeather | undefined,
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginTop: '2rem',
    },
    paper: {
      paddingTop: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      height:'100%'
    },
    grid: {
      overflow:'hidden',
    }
  }),
);

const Main:React.FC<IProps>= ({weather})=> {
    const classes = useStyles();

    return (
   
      <div className={classes.root}>
    {weather ?
        <Grid container spacing={3} alignItems="stretch">
          <Grid item xs={6} className={classes.grid}>
          
              <LeftContent weather={weather}/>
            
          </Grid>
          <Grid item xs={6} >
            <Paper className={classes.paper} >
            <RightContent weather={weather}/>
            </Paper>
          </Grid>
        </Grid>
     : ""}
      </div>
     
    );
  }
  
  export default Main
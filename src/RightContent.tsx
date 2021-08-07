import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import { IWeather } from "./interfaces/interfaces";

interface IProps {
  weather: IWeather | undefined;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      maxWidth: 752,
    },
    demo: {
      backgroundColor: theme.palette.background.paper,
    },
    title: {
      margin: theme.spacing(4, 0, 2),
    },
  })
);

const RightContent: React.FC<IProps> = ({ weather }) => {
  const classes = useStyles();

  return (
    <>
      {weather ? (
        <div>
          <Typography variant="h3"> {weather.location.name} </Typography>
          <Typography variant="h5"> {weather.location.region} </Typography>
          <img src={`http:${weather.current.condition.icon}`} alt="meteo" />
          <Typography variant="h5">{weather.current.temp_c}°C</Typography>
          <Grid item xs={12}>
            <Typography variant="h6" className={classes.title}>
              Aujourd'hui
            </Typography>
            <div className={classes.demo}>
              <List>
                <ListItem>
                  <ListItemText>
                    Précipitation: {weather.current.precip_mm} mm
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText >
                    Humidité: {weather.current.humidity} %
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>
                    Vitesse du vent: {weather.current.wind_kph} Km/h
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>
                    Rafales: {weather.current.gust_kph} Km/h
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>
                    Direction du vent: {weather.current.wind_dir}
                  </ListItemText>
                </ListItem>
              </List>
            </div>
          </Grid>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default RightContent;

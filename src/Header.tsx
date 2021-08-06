import React from "react";
import getWeather from "./axios/getWeather";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { alpha, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";

//styles
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    width: "50%",
    textAlign: "right",
    
    [theme.breakpoints.down("xs")]: {
     fontSize:'1.5rem',
     textAlign: "left",

    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    textAlign: "left",
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "20ch",
      "&:focus": {
        width: "25ch",
      },
    },
  },
}));

interface IProps {
  setWeather:React.Dispatch<React.SetStateAction<undefined | Promise<any>>>;
 
}
const Header: React.FC<IProps> = ({ setWeather}) => {
  const classes = useStyles();

  const chooseCity = async (e: any) => {
    console.log("event: ", e.target.city.value);
    const newCityMeteo= await getWeather(e.target.city.value);
    await setWeather(newCityMeteo)
 

  };

  const handleSubmit=(e: any) =>{
      e.preventDefault();
      chooseCity(e)
    }
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h3" noWrap>
            Meteo News
          </Typography>
          <div className={classes.search}>
          <form className={classes.root}  autoComplete="off" onSubmit={handleSubmit}>

            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              name="city"
              inputProps={{ "aria-label": "search" }}
            />
            <button type="submit" style={{ display: 'none' }}>valider</button>
            </form>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;

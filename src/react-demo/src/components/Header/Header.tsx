import React from "react";
import {
  AppBar,
  Theme,
  makeStyles,
  createStyles,
  Toolbar,
  IconButton,
  Typography,
  Button
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import MenuIcon from "@material-ui/icons/Menu";
import { changeRoute } from "../../actions/routes.actions";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    }
  })
);
const Header = () => {
  const classes = useStyles({});
  const dispatch = useDispatch();
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h5" component="h1" className={classes.title}>
          Redux pill
        </Typography>
        <Button
          color={"inherit"}
          onClick={() => dispatch(changeRoute("information"))}
        >
          Information
        </Button>
        <Button
          color={"inherit"}
          onClick={() => dispatch(changeRoute("exercises"))}
        >
          Exercises
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

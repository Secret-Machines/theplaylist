import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import { Link } from "react-router-dom";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    background: "linear-gradient(50deg, #FE6B8B 30%, #00BFFF 100%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 75,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth,
    color: "salmon"
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  }
}));

export default function ButtonAppBar(side) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  function toggleDrawer(booleanValue) {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  return (
    <div>
      <AppBar className={classes.root} position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link className="Link" to="/">
              Home
            </Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <h2>AM's Music Playlist</h2>
          </Typography>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        onClose={handleDrawerClose}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
        <ul>
          <li>
            <Link className="Link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="Link" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="Link" to="/playlist/2019">
              2019 Music Playlist
            </Link>
          </li>
          <li>
            <Link className="Link" to="/searchbrewery">
              Search Breweries in the US
            </Link>
          </li>
          <li>
            <Link className="Link" to="/topten1">
              2010's Album of the Year
            </Link>
          </li>
          <li>
            <Link className="Link" to="/resources">
              {" "}
              Resources
            </Link>
          </li>
        </ul>
      </Drawer>
    </div>
  );
}

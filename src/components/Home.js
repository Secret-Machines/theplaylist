import React from "react";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div className="App">
      <Typography>
        <h1>Welcome to the Home Page</h1>
        <hr />
        <Link className="Link" to="/about">
          <h2>About</h2>
        </Link>
        <Link className="Link" to="/playlist/2019">
          <h2>Playlist 2019</h2>
        </Link>
        <Link className="Link" to="/playlist/2020">
          <h2>Playlist 2020</h2>
        </Link>
        <Link className="Link" to="/topten1">
          <h2>Top Ten Albums of the 2010's</h2>
        </Link>
        <Link className="Link" to="/resources">
          <h2>Best Albums of the 2010's Resources</h2>
        </Link>
      </Typography>
    </div>
  );
};

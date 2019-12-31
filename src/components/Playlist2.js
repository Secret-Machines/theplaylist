import React, { useEffect, useState } from "react";
import Tabletop from "tabletop";
import YoutubePlayer from "react-youtube-player";
import Pagination from "react-hooks-paginator";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  bullet: {
    margin: "10px",
    transform: "scale(0.8)",
    minWidth: 1000,
    backgroundColor: "salmon",
    textAlign: "center",
    justifyContent: "center",
    alignContent: "center",
    color: "black",
    fontSize: 30
  },
  title: {
    margin: 50,
    fontSize: 40,
    justify: "center",
    textAlign: "center",
    justifyContent: "center",
    alignContent: "center"
  },
  title2: {
    margin: 50,
    fontSize: 20,
    justify: "center",
    textAlign: "center",
    justifyContent: "center",
    alignContent: "center",
    color: "black"
  },
  items: {
    fontSize: 25,
    color: "black"
  }
});

function Playlist2() {
  const pageLimit = 15;
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [items, setItems] = useState([]);
  const [currentItems, setCurrentItems] = useState([]);

  useEffect(() => {
    Tabletop.init({
      key: process.env.REACT_APP_DATA,
      callback: function(data, tabletop) {
        console.log(data);
        setItems(data.Sheet2.elements);
      },
      simpleSheet: false
    });
  }, []);

  useEffect(() => {
    setCurrentItems(items.slice(offset, offset + pageLimit));
  }, [offset, items]);
  const classes = useStyles();
  return (
    <div className="App">
      <h2 className={classes.title}>2020 Music Playlist</h2>
      <Grid
        container
        spacing={0}
        directions="column"
        alignItems="center"
        justify="center"
      >
        <Grid item xs={20}>
          {currentItems.map(a => {
            return (
              <Grid className={classes.bullet}>
                <div className="App" key={a.Id}>
                  <CardContent>
                    <p>Artist: {a.Artist}</p>
                    <p>Song: {a.Songs}</p>
                  </CardContent>
                  <div>
                    <YoutubePlayer
                      className="Box"
                      videoId={a.Url}
                      playbackState="unstarted"
                      configuration={{
                        showinfo: 0,
                        controls: 0,
                        loop: 1,
                        playlist: a.Url,
                        rel: 0
                      }}
                    />
                  </div>
                  <hr />
                </div>
              </Grid>
            );
          })}
          <Pagination
            totalRecords={items.length}
            pageLimit={pageLimit}
            pageNeighbours={2}
            setOffset={setOffset}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default Playlist2;

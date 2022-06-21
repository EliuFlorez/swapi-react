import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import CardDetail from "../components/CardDetail";
import Grid from '@mui/material/Grid';
import { useParams } from 'react-router-dom';
import { getApi } from "../api/api";

function DetailFilm() {
  const { id } = useParams();
  const [film, setFilm] = useState([]);

  useEffect(() => {
    getApi("films", id).then(res => {
      setFilm(res);
    })
    .catch((error) => console.error("Error: ", error));
  }, []);

  return (
    <div className="main">
      <Header/>
      <Grid container spacing={3}>
        <Grid item xs={10}>
          <CardDetail film={film} />
        </Grid>
      </Grid>
    </div>
  );
}

export default DetailFilm;

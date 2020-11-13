import React, { useState } from "react";
import {
  Container,
  Grid,
  Typography,
  Card,
  TextField,
  Button,
} from "@material-ui/core";
import styles from "./style";

export default ({ history }) => {
  const [searchText, setSearchText] = useState("");
  const classes = styles();
  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
    console.log(setSearchText);
  };

  const handleCleanTextClick = (event) => {
    setSearchText("");
  };
  const handleSearchTextClick = (event) => {
    history.push(`/results?movieName=${searchText}`);
  };

  return (
    <Container className={classes.container}>
      <Typography>Aquí puede buscar películas en el API de IMDB con HOOKS the REACT.js</Typography>
      <Card className={classes.cardContainer}>
        <Grid container className={classes.titleGridContainer}>
          <Grid>
            <Typography className={classes.title}> Bienvenido</Typography>{" "}
          </Grid>{" "}
          <Grid>
            <label> Icono </label>{" "}
          </Grid>{" "}
        </Grid>{" "}
        <TextField
          value={searchText}
          placeholder="Buscar..."
          className={classes.textFileSearch}
          onChange={handleSearchTextChange}
        />{" "}
        <Grid className={classes.buttonsContainer}>
          <Button variant="contained" onClick={handleCleanTextClick}>
            {" "}
            Limpiar{" "}
          </Button>{" "}
          <Button
            variant="contained"
            className={classes.searchButton}
            color="primary"
            size="large"
            onClick={handleSearchTextClick}
          >
            {" "}
            Buscar{" "}
          </Button>{" "}
        </Grid>{" "}
      </Card>{" "}
    </Container>
  );
};

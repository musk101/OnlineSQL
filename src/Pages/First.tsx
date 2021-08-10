import React from "react";
import CustomButton from "../Components/Button/button";
import Header from "../Components/Header";
import Grid, { GridSpacing } from "@material-ui/core/Grid";
export default function First() {
  return (
    <div>
      <Grid container>
        <Grid item md={6}>
          <Header />
          <p style={{ fontFamily: "Montserrat", color: "white"}}>Run SQL Queries without having to install anything!
          Just Create a table insert Data and run your queries easily!</p>
          <CustomButton text="Run Online Editor" onClick={() => {}} />
        </Grid>
        <Grid item md={6}>
          <Header />
        </Grid>
      </Grid>
    </div>
  );
}

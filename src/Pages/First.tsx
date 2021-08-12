import React from "react";
import "./First.css";
import CustomButton from "../Components/Button/button";
import Roww from "../Components/Row/roww";
import img from "../Assets/img/landingImage_1.png";
import img2 from "../Assets/img/landingImage_2.svg";
// import tick from "../Assets/img/tick.png";
import gif from "../Assets/img/landing-gif.gif";
import Header from "../Components/Header";
import databaseStorage from "../Assets/img/dbimg/database-storage.png";
import sql from "../Assets/img/dbimg/sql.png";
import mysql from "../Assets/img/dbimg/mysql.png";
import connection from "../Assets/img/dbimg/connection.png";
import Grid from "@material-ui/core/Grid";
export default function First() {
  return (
    <div>
      <Grid container justifyContent="center"   alignItems="center">
        <Grid item md={4}>
          <Header />
          <p className="landing-text-heading">
            A single platform to solve all your requirements.
          </p>
          <p className="landing-text">
            Run SQL Queries without having to install anything! Create your
            table run queries by just a button click! Our platform is fit for
            your daily use and hasslefree
          </p>
          {/* <img src={tick} alt="tick"/> */}
          <p className="landing-features">Progarmming environment not required</p>
          <p className="landing-features">Easy to use & good user experience</p>
          <p className="landing-features" >Multi language support</p>
          <Grid container justifyContent="space-around">
            <Grid item md={3}>
              <CustomButton
                border={true}
                text="Run Online Editor"
                onClick={() => {}}
              />
            </Grid>
            <Grid item md={3}>
              <CustomButton
                border={false}
                text="Run Online Editor"
                onClick={() => {}}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={6} >
          <img src={gif} alt="editor-gif"  width="500" height="400" className="landing-gif"/>
        </Grid>

        <Grid item md={12}  style={{marginLeft:"3rem", marginTop:"5rem"}}>
          <Roww
            img={img}
            direction="row"
            title={"Hello World"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus dut lobortis infelis et ex mattis pellentesque. Nullam in volutpat neque. Nulla in consectetur purus. Maecenas mattis ante sed neque vestibulum fermentum. Proin quam justo, auctor ac consequat id, dapibus eu libero. Vestibulum ut elit erat. Sed accumsan egestas rhoncus. Pellentesque porttitor cursus metus sed ornare.\n"
            }
          />
        </Grid>
        <Grid item md={12} style={{marginLeft:"8rem", marginTop:"5rem"}}>
          <Roww
            img={img2}
            direction="row-reverse"
            title={"Hello World"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus dut lobortis infelis et ex mattis pellentesque. Nullam in volutpat neque. Nulla in consectetur purus. Maecenas mattis ante sed neque vestibulum fermentum. Proin quam justo, auctor ac consequat id, dapibus eu libero. Vestibulum ut elit erat. Sed accumsan egestas rhoncus. Pellentesque porttitor cursus metus sed ornare.\n"
            }
          />
        </Grid>
        <Grid item md={3}>
          <img
            src={databaseStorage}
            alt="database-storage"
            width="100"
            height="100"
          />
        </Grid>
        <Grid item md={3}>
          <img src={sql} alt="SQL" width="100" height="100" />
        </Grid>
        <Grid item md={3}>
          <img src={mysql} alt="My Sql" width="100" height="100" />
        </Grid>
        <Grid item md={3}>
          <img src={connection} alt="Connection" width="100" height="100" />
        </Grid>
      </Grid>
    </div>
  );
}

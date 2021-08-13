import React from "react";
import "./First.css";
import CustomButton from "../Components/Button/button";
import Roww from "../Components/Row/roww";
import img from "../Assets/img/landingImage_1.png";
import img2 from "../Assets/img/landingImage_2.svg";
// import tick from "../Assets/img/tick.png";
import gif from "../Assets/img/landing-gif.gif";
import Header from "../Components/Header";
import { useHistory } from "react-router-dom";
import databaseStorage from "../Assets/img/dbimg/database-storage.png";
import sql from "../Assets/img/dbimg/sql.png";
import mysql from "../Assets/img/dbimg/mysql.png";
import connection from "../Assets/img/dbimg/connection.png";
import Grid from "@material-ui/core/Grid";
export default function First() {
  let history = useHistory();
  return (
    <div>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ paddingBottom: "3rem" }}
      >
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
          <p className="landing-features">
            Progarmming environment not required
          </p>
          <p className="landing-features">Easy to use & good user experience</p>
          <p className="landing-features">Multi language support</p>
          <Grid container justifyContent="space-around">
            <Grid item md={3} style={{ marginTop: "2rem" }}>
              <CustomButton
                border={true}
                text="Run Online Editor"
                onClick={() => {
                  history.push("/editor");
                }}
              />
            </Grid>
            <Grid item md={3} style={{ marginTop: "2rem" }}>
              <CustomButton border={false} text="Login" onClick={() => {}} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={6} >
          <img
            src={gif}
            alt="editor-gif"
            width="500"
            height="400"
            className="landing-gif"
            style={{ marginLeft: "12rem" }}
          />
        </Grid>

        <Grid item md={12} style={{ marginLeft: "3rem", marginTop: "5rem" }}>
          <Roww
            img={img}
            direction="row"
            title={"Feature rich and customizable editor!"}
            description={
              "A SQL editor with syntax highlighting capabilities, highly customizable with support for over 30 themes and growing. " +
              "Customize as per your taste and enjoy the experience."
            }
          />
        </Grid>
        <Grid
          item
          md={12}
          style={{
            marginLeft: "8rem",
            marginTop: "5rem",
            marginBottom: "5rem",
          }}
        >
          <Roww
            img={img2}
            direction="row-reverse"
            title={"Test your SQL code with ease"}
            description={
              "The portal allows you to quickly test out your SQL Queries, without any burdens of managing any SQL servers." +
              " Run anytime from anywhere! "
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

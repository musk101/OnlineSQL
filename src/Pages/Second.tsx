import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import AceEditor from "react-ace";
import IconButton from "@material-ui/core/IconButton";
import "ace-builds/src-noconflict/mode-mysql";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-ambiance";
import "ace-builds/src-noconflict/theme-chaos";
import "ace-builds/src-noconflict/theme-chrome";
import "ace-builds/src-noconflict/theme-clouds";
import "ace-builds/src-noconflict/theme-clouds_midnight";
import "ace-builds/src-noconflict/theme-cobalt";
import "ace-builds/src-noconflict/theme-crimson_editor";
import "ace-builds/src-noconflict/theme-dawn";
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/theme-dreamweaver";
import "ace-builds/src-noconflict/theme-eclipse";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-gob";
import "ace-builds/src-noconflict/theme-gruvbox";
import "ace-builds/src-noconflict/theme-idle_fingers";
import "ace-builds/src-noconflict/theme-iplastic";
import "ace-builds/src-noconflict/theme-katzenmilch";
import "ace-builds/src-noconflict/theme-kr_theme";
import "ace-builds/src-noconflict/theme-kuroir";
import "ace-builds/src-noconflict/theme-merbivore";
import "ace-builds/src-noconflict/theme-merbivore_soft";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-mono_industrial";
import "ace-builds/src-noconflict/theme-nord_dark";
import "ace-builds/src-noconflict/theme-pastel_on_dark";
import "ace-builds/src-noconflict/theme-solarized_dark";
import "ace-builds/src-noconflict/theme-solarized_light";
import "ace-builds/src-noconflict/theme-sqlserver";
import "ace-builds/src-noconflict/theme-terminal";
import "ace-builds/src-noconflict/theme-textmate";
import "ace-builds/src-noconflict/theme-tomorrow";
import "ace-builds/src-noconflict/theme-tomorrow_night";
import "ace-builds/src-noconflict/theme-tomorrow_night_blue";
import "ace-builds/src-noconflict/theme-tomorrow_night_bright";
import "ace-builds/src-noconflict/theme-tomorrow_night_eighties";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/theme-vibrant_ink";
import "ace-builds/src-noconflict/theme-xcode";
import Grid from "@material-ui/core/Grid";
import TitleInput from "../Components/TitleInput/titleInput";
import run from "../Assets/img/run.png";
import save from "../Assets/img/save.png";
import "./Second.css";
import Tooltip from "@material-ui/core/Tooltip";
import axios from "axios";

export default function Second() {
  const [themeName, setThemeName] = useState("monokai"); //updating the theme of the editor when option is clicked
  const [output, setOutput] = useState("");
  const [Query, setQuery] = useState("");
  const QueryCall = async () => {
    try {
      let response = await axios.post(
        "https://c293c534-d126-4141-a887-f76861baa1df.mock.pstmn.io/sql-result" //create a stub for customer data in csv
      );
      console.log(response);
      setOutput(response.data);
    } catch (err) {
      alert("Error");
    }
  };
  const alertPopup = () => {
    alert("saved successfully");
    localStorage.setItem("saved query", Query); //key value pair with key as saved query
  };
  useEffect(() => {
    let queryStored = localStorage.getItem("saved query") || ""; //it will return null if nothing is there otherwise the saved string
    setQuery(queryStored); //updating the state on page load
  }, []);
  return (
    <div
    // style={{
    //   backgroundImage: `url(${editorbackground})`,
    //   backgroundSize: "cover",
    // }}
    >
      <Grid container alignItems={"center"} style={{ marginTop: "3rem" }}>
        <Grid item md={4}>
          <Grid container>
            <Grid item md={4} style={{ marginLeft: "3rem" }}>
              <Header />
            </Grid>
            <Grid item md={8} style={{ marginLeft: "1rem" }}>
              <select
                id="ide-pattern"
                onChange={(e) => {
                  let theme = e.target.value;
                  setThemeName(theme);
                }}
              >
                <option value="monokai">monokai</option>
                <option value="github">github</option>
                <option value="ambiance">ambiance</option>
                <option value="chaos">chaos</option>
                <option value="chrome">chrome</option>
                <option value="clouds">clouds</option>
                <option value="clouds_midnight">clouds_midnight</option>
                <option value="cobalt">cobalt</option>
                <option value="crimson_editor">crimson_editor</option>
                <option value="dawn">dawn</option>
                <option value="dracula">dracula</option>
                <option value="dreamweaver">dreamweaver</option>
                <option value="eclipse">eclipse</option>
                <option value="github">github</option>
                <option value="gob">gob</option>
                <option value="gruvbox">gruvbox</option>
                <option value="idle_fingers">idle_fingers</option>
                <option value="iplastic">iplastic</option>
                <option value="katzenmilch">katzenmilch</option>
                <option value="kr_theme">kr_theme</option>
                <option value="kuroir">kuroir</option>
                <option value="merbivore">merbivore</option>
                <option value="merbivore_soft">merbivore_soft</option>
                <option value="mono_industrial">mono_industrial</option>
                <option value="nord_dark">nord_dark</option>
                <option value="pastel_on_dark">pastel_on_dark</option>
                <option value="solarized_dark">solarized_dark</option>
                <option value="solarized_light">solarized_light</option>
                <option value="sqlserver">sqlserver</option>
                <option value="terminal">terminal</option>
                <option value="textmate">textmate</option>
                <option value="tomorrow">tomorrow</option>
                <option value="tomorrow_night">tomorrow_night</option>
                <option value="tomorrow_night_blue">tomorrow_night_blue</option>
                <option value="tomorrow_night_bright">
                  tomorrow_night_bright
                </option>
                <option value="tomorrow_night_eighties">
                  tomorrow_night_eighties
                </option>
                <option value="twilight">twilight</option>
                <option value="vibrant_ink">vibrant_ink</option>
                <option value="xcode">xcode</option>
              </select>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={2} style={{ marginLeft: "auto" }}>
          <Tooltip title="Run Your Code">
            <IconButton onClick={QueryCall}>
              <img src={run} height="50" width="50" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Save">
            <IconButton onClick={alertPopup}>
              <img src={save} height="30" width="30" />
            </IconButton>
          </Tooltip>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item md={6}>
          <AceEditor
          className="ace-editor"
            
            value={Query}
            onChange={(e) => setQuery(e)}
            placeholder="Write Your SQL Queries"
            mode="mysql"
            theme={themeName}
            name="basic-code-editor"
            fontSize={18}
            showPrintMargin={true}
            showGutter={true}
            highlightActiveLine={true}
            setOptions={{
              enableBasicAutocompletion: true,
              enableLiveAutocompletion: true,
              enableSnippets: false,
              showLineNumbers: true,
              tabSize: 2,
            }}
          />
        </Grid>
        <Grid item md={6}>
          <TitleInput
            isTextarea={true}
            value={output}
            placeholder="Output Of Your Query"
            style={{ width: "90%", height: "97%", marginTop: "1rem" }}
          />
        </Grid>
      </Grid>
    </div>
  );
}

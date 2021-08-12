import React, { useState } from "react";
import Header from "../Components/Header";
import AceEditor from "react-ace";
import CustomButton from "../Components/Button/button";
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
import "./Second.css";

export default function Second() {
  const [themeName, setThemeName] = useState("monokai");
  return (
    <div>
      <Header />
      <Grid container alignItems={"center"}>
        <Grid item md={3}>
          <TitleInput placeholder={"Enter Title"} />
        </Grid>

        <Grid item md={3}>
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
            <option value="tomorrow_night_bright">tomorrow_night_bright</option>
            <option value="tomorrow_night_eighties">
              tomorrow_night_eighties
            </option>
            <option value="twilight">twilight</option>
            <option value="vibrant_ink">vibrant_ink</option>
            <option value="xcode">xcode</option>
          </select>
        </Grid>
        <Grid item md={2} style={{ marginLeft: "auto" }}>
          <CustomButton border={true} text="Save" onClick={() => {}} />
        </Grid>
        <Grid item md={2} style={{ marginLeft: "auto" }}>
          <CustomButton border={false} text="Run" onClick={() => {}} />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item md={6}>
          <AceEditor
            style={{
              height: "70vh",
              width: "90%",
              marginLeft: "3rem",
              marginTop: "2rem",
              borderRadius: "16px",
            }}
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
            style={{ width: "100%", height: "90%", marginTop: "2rem" }}
          />
        </Grid>
      </Grid>
    </div>
  );
}

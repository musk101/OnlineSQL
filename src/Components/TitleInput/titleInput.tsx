import './titleInput.css'
// import { withStyles, TextField } from "@material-ui/core";
// const TitleInput = withStyles({
//   root: {
//     width: "100%",
//     borderRadius: 14,
//     backgroundColor: "#1c006f",
//     "& .MuiInputBase-input": {
//       fontFamily: "Montserrat",
//       borderRadius: 16,
//     },
//     "& .MuiFormLabel-root.Mui-focused": {
//       color: "#cdcdcd !important",
//     },
//     "& .MuiFormLabel-filled:not(.Mui-focused)": {
//       paddingTop: 10,
//     },
//     "& .MuiOutlinedInput-root": {
//       "& fieldset": {
//         borderRadius: 14,
//         borderColor: "#1c006f",
//       },
//       "&.Mui-focused fieldset": {
//         borderColor: "#cdcdcd !important",
//       },
//     },
//   },
// })(TextField);
function TitleInput(props: any) {
  return (<input type="text" id="title-inp-txt" {...props}/>);
}
export default TitleInput;

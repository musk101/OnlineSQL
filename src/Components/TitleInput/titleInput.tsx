import './titleInput.css'
function TitleInput(props: any) {
  return(props.isTextarea ? (
 (<textarea readOnly={true} id="title-inp-txt" {...props}/>)
) : 
 (<input id="title-inp-txt" {...props}/>))};
  
export default TitleInput;

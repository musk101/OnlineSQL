import React, {ReactElement} from "react";
import './button.css';
function CustomButton({text, onClick}: {text: string, onClick: any}): ReactElement {
    return (
      <div>
        <button onClick={onClick} className={"my-btn"}>
            {text}
        </button>
      </div>
    );
}

export default CustomButton;

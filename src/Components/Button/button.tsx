import React, { ReactElement } from "react";
import "./button.css";
function CustomButton({
  text,
  onClick,
  border
}: {
  text: string;
  onClick: any;
  border: any;
}): ReactElement {
  return (
    <div>
      {border ? (
        <button onClick={onClick} className={"my-btn"}>
          {text}
        </button>
      ) : (
        <button onClick={onClick} className={"border-button"}>
          {text}
        </button>
      )}
    </div>
  );
}

export default CustomButton;

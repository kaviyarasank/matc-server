import "./button.css";
import React from "react"

function Button(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    onClick: props.onClick,
    className: "choicesbutton",
    "data-testid": props.testid
  }, props.name));
}

export default Button;
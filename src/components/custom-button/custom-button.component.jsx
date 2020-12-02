import React from "react";
import { Button } from "semantic-ui-react";
import "./custom-button.styles.css";

const CustomButton = ({ children, ...otheProps }) => {
  return (
    <Button className="signInButton" {...otheProps}>
      {children}
    </Button>
  );
};

export default CustomButton;

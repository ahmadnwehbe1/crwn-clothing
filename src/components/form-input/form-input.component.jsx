import React from "react";
import { Form } from "semantic-ui-react";
import "./form-input-styles.css";

const FormInput = ({ handleChange, ...otherProps }) => {
  return (
    <Form.Field style={{ marginBottom: "25px", marginTop: "25px" }}>
      <input className="signInInput" onChange={handleChange} {...otherProps} />
    </Form.Field>
  );
};

export default FormInput;

import React, { Component } from "react";
import { Form } from "semantic-ui-react";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-in-styles.css";

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
  }
  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = () => {
    this.setState({ email: "", password: "" });
  };
  render() {
    return (
      <div>
        <h2
          style={{
            fontSize: "1.5em",
            fontWeight: "bold",
            fontFamily: "Open Sans Condensed",
          }}
        >
          I already have an account
        </h2>
        <span style={{ fontFamily: "Open Sans Condensed" }}>
          Sign in with your email and password
        </span>
        <Form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            placeholder="email"
            value={this.state.email}
            required
            name="email"
            handleChange={this.handleChange}
          />
          <FormInput
            type="password"
            placeholder="password"
            required
            value={this.state.password}
            name="password"
            handleChange={this.handleChange}
            style={{ marginTop: "25px", marginBottom: "25px" }}
          />

          <CustomButton
            floated="left"
            className="signInButton"
            secondary
            type="submit"
          >
            Sign in
          </CustomButton>
          <CustomButton floated="right" className="signInButton" primary>
            Sign in with google
          </CustomButton>
        </Form>
      </div>
    );
  }
}

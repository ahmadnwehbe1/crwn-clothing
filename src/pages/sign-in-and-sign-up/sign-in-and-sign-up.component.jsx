import React from "react";
import { Card, Container } from "semantic-ui-react";
import SignIn from "../../components/sign-in/sign-in.component";
import "./sign-in-and-sign-up.styles.css";

const SignInAndSignUpPage = () => {
  return (
    <Container>
      <Card.Group centered itemsPerRow={2} style={{ marginTop: "30px" }}>
        <Card className="signInCard">
          <SignIn />
        </Card>
        <Card className="signInCard">
          <SignIn />
        </Card>
      </Card.Group>
    </Container>
  );
};

export default SignInAndSignUpPage;

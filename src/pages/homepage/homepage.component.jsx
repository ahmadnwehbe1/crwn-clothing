import React from "react";
import { Container } from "semantic-ui-react";
import Directory from "./../../components/directory/directory.component";

const HomePage = () => {
  return (
    <Container style={{ width: "90%" }}>
      <Directory />
    </Container>
  );
};

export default HomePage;

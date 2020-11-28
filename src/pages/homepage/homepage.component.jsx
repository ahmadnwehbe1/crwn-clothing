import React from "react";
import { Container } from "semantic-ui-react";
import Directory from "./../../components/directory/directory.component";

const HomePage = () => {
  return (
    <div>
      <Container fluid style={{ width: "100%" }}>
        <Directory />
      </Container>
    </div>
  );
};

export default HomePage;

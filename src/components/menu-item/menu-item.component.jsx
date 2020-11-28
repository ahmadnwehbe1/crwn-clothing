import React from "react";
import { withRouter } from "react-router-dom";
import { Card } from "semantic-ui-react";
import "./menu-item.styles.css";

const MenuItem = ({ title, size, imageUrl, history, linkUrl }) => {
  return (
    <Card
      className="outerCard"
      style={{
        height: size === "large" ? "400px" : "240px",
        width: size === "large" ? "41.8%" : "27.5%",
        marginRight: size === "large" ? "3.9px" : "0",
        backgroundImage: `url(${imageUrl})`,
        backgroundPosition: "center",
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
      }}
      onClick={() => {
        history.push("/" + linkUrl);
      }}
    >
      <Card.Content>
        <Card
          className="cardContent"
          style={{ marginTop: size === "large" ? "130px" : "50px" }}
          centered
        >
          <div style={{ margin: "auto 0" }}>
            <h1 className="title">{title}</h1>
            <span className="shopNow">SHOP NOW</span>
          </div>
        </Card>
      </Card.Content>
    </Card>
  );
};

export default withRouter(MenuItem);

import React, { Fragment } from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import { Card } from "semantic-ui-react";
import CollectionItem from "../collection-item/collection.item.component";
import "./collection.preview.styles.css";

const CollectionPreview = ({ title, items, routeName, history }) => {
  return (
    <Fragment>
      <h1
        className="collectionName"
        style={{
          marginTop: "35px",
          marginLeft: "10px",
          fontSize: "28px",
          marginBottom: "25px",
          fontFamily: "Open Sans Condensed",
        }}
        onClick={() => history.push("/shop/" + routeName)}
      >
        {title.toUpperCase()}
      </h1>

      <Card.Group
        style={{ marginBottom: "60px", marginTop: "0px" }}
        centered
        itemsPerRow={4}
      >
        {items
          .filter((items, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </Card.Group>
    </Fragment>
  );
};

export default withRouter(CollectionPreview);

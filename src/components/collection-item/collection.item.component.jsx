import React from "react";
import { Button, Card, Image } from "semantic-ui-react";
import "./collection.item.styles.css";

const CollectionItem = ({ item, routeName }) => {
  return (
    <>
      <Card className="CollectionCard">
        <Image className="imageCard" src={item.imageUrl} />
        <div>
          <Card.Header style={{ display: "inline" }} className="itemName">
            {item.name}
          </Card.Header>
          <Card.Header
            style={{ display: "inline", float: "right" }}
            className="itemName"
          >
            {"$" + item.price}
          </Card.Header>
        </div>

        <div className="middle">
          <Button className="addToCart">Add to cart</Button>
        </div>
      </Card>
    </>
  );
};

export default CollectionItem;

import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import CollectionPreview from "../../components/collection-preview/collection.preview.component";
import { SHOP_DATA } from "./shop.data";

export default class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = { collections: SHOP_DATA };
  }
  render() {
    const { collections } = this.state;
    return (
      <Container style={{ width: "90%" }}>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </Container>
    );
  }
}

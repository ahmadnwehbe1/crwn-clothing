import React, { Component } from "react";
import { Card, Grid } from "semantic-ui-react";
import MenuItem from "../menu-item/menu-item.component";

export default class Directory extends Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          id: 1,
          linkUrl: "shop/hats",
        },
        {
          title: "jackets",
          imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
          id: 2,
          linkUrl: "shop/jackets",
        },
        {
          title: "sneakers",
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
          id: 3,
          linkUrl: "shop/sneakers",
        },
        {
          title: "womens",
          imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
          id: 4,
          linkUrl: "shop/womens",
          size: "large",
        },
        {
          title: "mens",
          imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
          id: 5,
          linkUrl: "shop/mens",
          size: "large",
        },
      ],
    };
  }
  render() {
    return (
      <Card.Group
        centered
        itemsPerRow={3}
        style={{
          marginTop: "10px",
        }}
      >
        {this.state.sections.map((section) => (
          <MenuItem
            key={section.id}
            title={section.title}
            size={section.size}
            imageUrl={section.imageUrl}
            linkUrl={section.linkUrl}
          />
        ))}
      </Card.Group>
    );
  }
}

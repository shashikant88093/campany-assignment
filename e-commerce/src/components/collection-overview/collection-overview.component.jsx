import React from "react";
import { connect } from "react-redux";
import CollectionPreview from "../collection-preview/collection-preview.components";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selector";
import { createStructuredSelector } from "reselect";
import "./collection-overview.styles.scss";

const CollectionOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...collectionShop }) => (
      <CollectionPreview key={id} {...collectionShop} />
    ))}
  </div>
);


const mapStateToProps = createStructuredSelector({
  collections:selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionOverview);

import React from 'react';
import ImageViewer from './ImageViewer/ImageViewer';
import ProductSummary from './ProductSummary/ProductSummary';

import styles from './style.css';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id={styles.productDetails}>
        <ImageViewer product={this.props.product} />
        <ProductSummary />
      </div>
    );
  }
}

export default ProductDetails;
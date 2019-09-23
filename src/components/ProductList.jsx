import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import ProductItem from './ProductItem';
@inject('Product')
@observer

class ProductList extends Component {
    render() {
        const { products } = this.props.Product;
        return (
            <div style={styles.productContainer}>
                {products.map(product => {
                    return <ProductItem key={product.id} product={product} />
                })}
            </div>
        )
    }
}

const styles = {
    productContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        flex: '0 0 80%'
    }
}

export default ProductList;
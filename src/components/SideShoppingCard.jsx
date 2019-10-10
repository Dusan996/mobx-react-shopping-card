import React, { Component } from 'react'
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import AddedItem from './AddedItem';

@inject('Product')
@observer

class SideShoppingCard extends Component {
    render() {
        const { shoppingCard, removeFromCard } = this.props.Product;
        let totalCost = shoppingCard.reduce((acc, curr) => (
            acc += curr.value
        ), 0)
        return (
            <div style={{ position: 'fixed' }}>
                <ul>
                    {shoppingCard && shoppingCard.map((item, index) => (
                        <AddedItem key={index} item={item} removeFromCard={removeFromCard} />
                    ))}

                </ul>
                <div style={{ marginTop: '20px' }}>
                    {shoppingCard.length > 0 ?
                        <h3>Total Cost: {totalCost.toFixed(2)}$</h3>
                        : null
                    }
                </div>
                {shoppingCard.length > 0 && <Link to='/shopcard'><Button>Shop Now</Button></Link>}
            </div>
        )
    }
}

export default SideShoppingCard;
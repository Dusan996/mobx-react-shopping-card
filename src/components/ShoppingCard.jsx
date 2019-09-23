import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ShoppingCard extends Component {
    render() {
        console.log(this.props.shoppingCard);
        const { shoppingCard } = this.props;
        return (
            <div>
                <Link to='/'><button>Back</button></Link>
                {shoppingCard.map(item => {
                    return <p key={item.id}>{item.name}</p>
                })}
            </div>
        )
    }
}

export default ShoppingCard;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

@inject('Product')
@observer

class ShoppingCard extends Component {
    render() {
        console.log(this.props.shoppingCard);
        const { shoppingCard } = this.props;
        const { removeFromCard } = this.props.Product
        let totalCost = shoppingCard.reduce((acc, curr) => (
            acc += curr.value
        ), 0)
        return (
            <>
                <Link to='/'><button>Back</button></Link>
                <div style={styles.container}>
                    {shoppingCard.map(item => {
                        return <div key={item.id}>
                            <DeleteForeverIcon style={{ cursor: 'pointer', float: 'right' }} onClick={() => removeFromCard(item.id)} />
                            <div style={styles.itemWrapper}>
                                <h4>Name:</h4>
                                <h4>{item.name}</h4>
                            </div>
                            <div style={styles.itemWrapper}>
                                <h4>Value:</h4>
                                <h4>{item.value}$</h4>
                            </div>
                            <hr />
                        </div>
                    })}
                </div>
                <button style={styles.buttonStyle}>Proceed {totalCost}$</button>
            </>
        )
    }
}

const styles = {
    container: {
        // borderBottom: '1px solid grey'
    },
    itemWrapper: {
        display: 'flex',
        justifyContent: 'space-around',
        padding: '10px'
    },
    buttonStyle: {
        display: 'flex',
        margin: 'auto'
    }
}

export default ShoppingCard;
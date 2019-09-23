import React, { Component } from 'react';
import { Card, Typography, CardContent, CardActionArea, CardActions, Button, CardMedia, ListItemText } from '@material-ui/core';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';
@inject('Product')
@observer

class ProductItem extends Component {
    render() {
        const { name, price, rating, imgUrl } = this.props.product;
        const { selectedProduct } = this.props.Product;
        return (
            <div>
                <Card style={{ maxWidth: '250px', margin: '10px 20px' }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="140"
                            image={imgUrl}
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {name}
                            </Typography>
                        </CardContent>

                    </CardActionArea>
                    <CardContent style={{ display: 'flex' }}>
                        <ListItemText primary="Price" secondary={`${price}$`} />
                        <ListItemText primary="Rating" secondary={rating} />
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary"
                            onClick={() => this.props.Product.addToCard(this.props.product)}>
                            Add to Card
        </Button>
                        <Link to={`/product`}>
                            <Button size="small" color="primary"
                                onClick={() => this.props.Product.productOverview(this.props.product)}>
                                Learn More
        </Button>
                        </Link>
                    </CardActions>
                </Card>
            </div>
        )
    }
}
export default ProductItem;
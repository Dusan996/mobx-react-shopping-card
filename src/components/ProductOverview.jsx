import React from 'react';
import { CardHeader, Card, Button, CardContent, Typography, CardMedia } from '@material-ui/core';
import { Link } from 'react-router-dom';

const ProductOverview = ({ product }) => {
    return (
        <div style={{ width: '30%', margin: '50px auto', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)' }}>
            <Link to='/'><Button>Back</Button></Link>
            <Card >
                <CardHeader
                    title={product.name}
                    subheader={`Rating: ${product.rating}`}
                />
                <CardMedia
                    image={product.imgUrl}
                    component="img"
                    title="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {product.desc}
                    </Typography>
                </CardContent>

            </Card>
        </div>
    )
}

export default ProductOverview;
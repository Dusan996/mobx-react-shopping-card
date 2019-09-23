import React from 'react';
import FilterProducts from './FilterProducts';
import ProductList from './ProductList';
import SideShoppingCard from './SideShoppingCard';

const LandingPage = () => {
    return (
        <>
            <FilterProducts />
            <div style={{ display: 'flex' }}>
                <ProductList />
                <div style={{ width: '100%' }}>
                    <SideShoppingCard />
                </div>
            </div>
        </>
    )
}

export default LandingPage;
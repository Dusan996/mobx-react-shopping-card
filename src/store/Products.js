import { observable, action } from 'mobx';
import uuid from 'uuid/v4';

import productArray from './productlist';

class Product {
    // OVO JE STATE
    // OBSERVABLE --> posmatraj
    @observable products = productArray;
    @observable shoppingCard = [];
    @observable selectedProduct = {};
    // ////////////////////////////////////// PRODUCTS ACTIONS

    // choose product for overview
    @action productOverview = product => {
        console.log(product)
        return this.selectedProduct = product
    }

    //sort productArray
    @action sortingProduct = e => {
        switch (e.target.value) {
            case '10':
                let priceUp = this.products.slice().sort((a, b) => { return a.price - b.price })
                return this.products.replace(priceUp)
            case '20':
                let priceDown = this.products.slice().sort((a, b) => { return b.price - a.price })
                return this.products.replace(priceDown)
            case '30':
                let ratingUp = this.products.slice().sort((a, b) => { return a.rating - b.rating })
                return this.products.replace(ratingUp);
            case '40':
                let ratingDown = this.products.slice().sort((a, b) => { return b.rating - a.rating })
                return this.products.replace(ratingDown);
            default: return;
        }
    }

    //filter products by name
    @action filterByName = e => {
        let filteredProduct = [];
        let allProducts = this.products;
        if (e.target.value !== '') {
            filteredProduct = allProducts.filter(product => product.name.toLowerCase().includes(e.target.value.toLowerCase()))
        } else {
            filteredProduct = productArray;
        }
        return this.products = filteredProduct;
    }
    // //////////////////CARD ACTIONS
    //add to card
    @action addToCard = product => {
        let addedItem = {
            id: uuid(),
            name: product.name,
            value: product.price
        }
        return this.shoppingCard.push(addedItem);
    }
    @action removeFromCard = id => {
        console.log(id)
        let updatedCard = this.shoppingCard.filter(item => item.id !== id);

        return this.shoppingCard.replace(updatedCard)
    }
}

const product = new Product();
export default product;
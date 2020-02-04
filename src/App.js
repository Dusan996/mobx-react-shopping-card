import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import LandingPage from './components/LandingPage';
import ProductOverview from './components/ProductOverview';
import ShoppingCard from './components/ShoppingCard';

@inject('Product')
@observer

class App extends Component {
  hehe() {
    console.log('aa')
  }
  // 
  render() {
    console.log(this.props.history)
    const { selectedProduct } = this.props.Product;
    const { shoppingCard } = this.props.Product;
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route path={`/product`} component={() => <ProductOverview product={selectedProduct} />} />
            <Route path={`/shopcard`} component={() => <ShoppingCard shoppingCard={shoppingCard} />} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;

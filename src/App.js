import React from 'react';
import {Route} from 'react-router-dom'

import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BugerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';

const App = (props) => {
  return (
    
    <div>
      <Layout>
        <Route path="/" exact component={BurgerBuilder} />
        <Route path="/orders" exact component={Orders} />
        <Route path="/checkout"  component={Checkout} />
      </Layout>

    </div>
  );
}

export default App;

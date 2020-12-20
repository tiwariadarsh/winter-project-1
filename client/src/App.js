import { React, Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Navbar from './views/navbar.js';
import Home from './views/home.js';
import Product from './views/product.js';
import Cart from './views/cart.js';
import Login from './views/Login.js';


class App extends Component{
  render(){
    return (<BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/productsInCart' component={Cart}/>
        <Route path='/products/:id'  component={Product}/>
        <Route path='/login' component={Login} />
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;

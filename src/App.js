import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import './App.css';
import Products from './Products'
import ProductForm from './ProductForm'

import Categories from './Categories'
import CategoryForm from './CategoryForm'

import Purchases from './Purchases'
import PurchaseForm from './PurchaseForm'

import Sales from './Sales'
import SaleForm from './SaleForm'

import Admins from './Admins'
import AdminRegisterForm from './AdminRegisterForm'
import AdminLoginForm from './AdminLoginForm'

import Users from './Users'
import UserRegisterForm from './UserRegisterForm'
import UserLoginForm from './UserLoginForm'


class App extends Component {
    render() {
        return <Router>
            <div id="menu">
                <ul>
                    <li>
                        <Link to="/products">Show Products</Link>
                    </li>
                    <li>
                        <Link to="/product">Add products</Link>
                    </li>

                    <li>
                        <Link to="/categories">Show Categories</Link>
                    </li>
                    <li>
                        <Link to="/category">Add Categories</Link>
                    </li>

                    <li>
                        <Link to="/purchases">Show Purchase</Link>
                    </li>
                    <li>
                        <Link to="/purchase">Add Purchase</Link>
                    </li>

                    <li>
                        <Link to="/admins">Show Admins</Link>
                    </li>
                    <li>
                        <Link to="/register_admin">Register Admin</Link>
                    </li>
                    <li>
                        <Link to="/login_admin">Login as Admin</Link>
                    </li>

                    <li>
                        <Link to="/users">Show Users</Link>
                    </li>
                    <li>
                        <Link to="/register_user">Register User</Link>
                    </li>
                    <li>
                        <Link to="/login_user">Login as User</Link>
                    </li>

                    <li>
                        <Link to="/sales">Show Sales</Link>
                    </li>
                    <li>
                        <Link to="/sale">Add sale</Link>
                    </li>

                </ul>
                    <Route path="/products" component={Products}/>
                    <Route path="/categories" component={Categories}/>
                    <Route path="/purchases" component={Purchases}/>
                    <Route path="/admins" component={Admins}/>
                    <Route path="/users"  component={Users}/>
                    <Route path="/sales" component={Sales}/>

                    <Route path="/product"  component={ProductForm}/>
                    <Route path="/category"  component={CategoryForm}/>
                    <Route path="/purchase" component={PurchaseForm}/>
                    <Route path="/register_admin" component={AdminRegisterForm}/>
                    <Route path="/login_admin" component={AdminLoginForm}/>
                    <Route path="/register_user" component={UserRegisterForm}/>
                    <Route path="/login_user" component={UserLoginForm}/>
                    <Route path="/sale" component={SaleForm}/>
            </div>
        </Router>
    }
}

export default App;


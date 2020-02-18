import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';
import store from './store/configureStore';
import { loadUser } from './store/actions/authActions';

class App extends Component {

    componentDidMount() {
        store.dispatch(loadUser());
    }

    render() {
        return (
            <div className="App" >
                <AppNavbar />
                <ShoppingList />
            </div>
        );
    }
}

export default App;

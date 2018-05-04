import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import BookList from './container/book-list'
import {Provider} from 'react-redux'
import reducer from "./reducer";
// import {createStore} from 'redux'
import configureStore from './configureStore'
import AddBooks from './container/AddBooks'

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>

                <Provider store={configureStore(reducer)}>
                    <div>
                        <AddBooks/>
                        <BookList/>
                    </div>
                </Provider>
            </div>
        );
    }
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from "./routers/AppRouter";
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import "react-bootstrap/dist/react-bootstrap.min.js";




const store = configureStore();
const state = store.getState();
console.log(state.user);


const jsx = ( 
    <Provider store ={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx,document.getElementById('app'))


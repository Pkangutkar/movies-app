import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './screens/home/Home.css';
import reportWebVitals from './reportWebVitals';
//import Header from './common/header/Header';
//ReactDOM.render(<Header/>,document.getElementById('root'));

import Home from './screens/home/Home';
ReactDOM.render(<Home />,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

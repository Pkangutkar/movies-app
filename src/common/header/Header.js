import React, { Component } from 'react';
import logo from '../../assets/logo.svg';
import './Header.css';
class Header extends Component {
    render() { 
    return (
        <div>
            <header className="app-header">
            <img src={logo} className="app-logo" alt="Movies App Logo" />

            </header>
            </div>)
            }
        }
            export default Header;
import React, { Component } from 'react';

import Header from '../../common/header/Header';
import './Home.css';


class Home extends Component {
    render() { 
    return (
        <div>
        <Header />
        <div className="upcoming-movies">
            <span>Upcoming Movies</span>
        </div>
        </div>
      )
        }
        
    }

        export default Home;
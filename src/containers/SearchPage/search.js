import React, { Component } from 'react';

import classes from './search.module.css';
import logo from '../../assets/logo.png';


class Search extends Component {

    render() {
        return (
            <div className={classes.overall}>
                <div className={classes.myLogo}>
                    <img src={logo} alt="logo" height="180" items-algin="center" />
                </div>
                <p className={classes.text}>Building Products Selection Platform</p>
            </div>
        )
    }
}

export default Search;
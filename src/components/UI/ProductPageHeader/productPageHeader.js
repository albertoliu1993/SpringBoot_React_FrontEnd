import React, { Component } from 'react';


import InputWithDataList from '../InputWithDataList/inputWithDataList';
import logo from '../../../assets/logo.png';
import classes from '../ProductPageHeader/productPageHeader.module.css';

class Header extends Component {
    render() {

        return (
            <div className={classes.Header}>
                <div className={classes.MyLogo}>
                    <img src={logo} alt="logo" height="50" items-algin="center" />
                </div>
                <div className={classes.MyInput}>
                    <InputWithDataList />
                </div>
                <div className={classes.MyJoint}>
                     <span>Project</span><img src={logo} alt="logo" height="40" items-algin="center" />
                </div>
            </div>
        )
    }
}

export default Header;
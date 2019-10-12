import React, { Component } from 'react';

import SideBar from '../../components/UI/ProductsSideBar/productSideBar';
import Header from '../../components/UI/ProductPageHeader/productPageHeader';
import classes from './products.module.css';
import { Button } from '@material-ui/core';

class Products extends Component {
    render() {

        let controlPanel = (
            <div>
                <div className="MySearch">
                Search: <Button style={{backgroundColor:"gray"}}>Save</Button> <Button style={{backgroundColor:"gray"}}>Clear</Button>
                </div>
                <SideBar panelName="Product Type"></SideBar>
                <SideBar panelName="Technical Specifications"></SideBar>
                <SideBar panelName="Brand"></SideBar>
                <SideBar panelName="Past Selection"></SideBar>
                <SideBar panelName="Certifications"></SideBar>
            </div>
        );

        return (
            <div className="Products">
                <div>
                    <Header />
                </div>
                <div className={classes.SideBar}>
                    {controlPanel}
                </div>
            </div>
        )
    }
}

export default Products;
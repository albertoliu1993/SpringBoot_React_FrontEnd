import React, { Component } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

import SideBar from '../../components/UI/ProductsSideBar/productSideBar';
import Header from '../../components/UI/ProductPageHeader/productPageHeader';
import classes from './products.module.css';
import { Button } from '@material-ui/core';
import SwapVertIcon from '@material-ui/icons/SwapVert';

import RangeSlider from '../../components/UI/SliderDemo/sliderDemo';
import RangeSlider1 from '../../components/UI/SliderDemo/sliderDemo1';
import RangeSlider2 from '../../components/UI/SliderDemo/sliderDemo2';
import RangeSlider3 from '../../components/UI/SliderDemo/sliderDemo3';
import RangeSlider4 from '../../components/UI/SliderDemo/sliderDemo4';
import RangeSlider5 from '../../components/UI/SliderDemo/sliderDemo5';
import RangeSlider6 from '../../components/UI/SliderDemo/sliderDemo6';
import { Checkbox } from 'semantic-ui-react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';




class Products extends Component {

    state = {

        data: [],
        ModelYearMin: '',
        ModelYearMax: '',
        filter: [
            { title: 'Airflow(CFM)', defaultValue: [5000, 10000], defaultMin: 5000, defaultMax: 10000 },
            { title: 'Max Power(W)', defaultValue: [9.84, 80], defaultMin: 9.84, defaultMax: 80 },
            { title: 'Sound at max speed(dBA)', defaultValue: [20, 80], defaultMin: 20, defaultMax: 80 },
            { title: 'Fan sweep diameter(in)', defaultValue: [18, 80], defaultMin: 18, defaultMax: 80 },
            { title: 'Height(in)', defaultValue: [12, 80], defaultMin: 12, defaultMax: 80 },
            { title: 'Firm', defaultValue: [10, 20], defaultMin: 10, defaultMax: 20 },
            { title: 'Global', defaultValue: [10, 1094], defaultMin: 10, defaultMax: 100 }
        ],
        filterFlag: false
    };

    componentDidMount() {
        let token = "Bearer" + localStorage.token;
        let url = "http://localhost:8080/api/products/display";
        axios({
            url: url,
            token: token,
            method: 'GET',
            headers: {
                Authorization: token
            }
        })
            .then((response) => {
                this.setState({ data: response.data });
            })
            .catch((error) => {
                console.log(error)
            });
    };


    save = () => {
        this.setState({ filterFlag: true })
    };

    clear = () => {
        this.setState({ filterFlag: false });
        for (let i = 0; i < 7; i++) {
            this.setState.filter[i].defaultValue = [this.state.filter[i].defaultMin[0], this.state.filter[i].defaultMax[1]]
        };
    };

    minModuleYearHandler = (event) => {
        this.setState({ ModelYearMin: event.target.value });
    };

    maxModelYearHandler = (event) => {
        this.setState({ ModelYearMax: event.target.value });
    };

    passValue = (XXXX) => {
        console.log(XXXX);
        const { filter } = this.state;
        filter[0].defaultValue = XXXX;
        this.setState({
            filter: filter
        });
    }

    passValue1 = (updatedArray) => {
        const { filter } = this.state;
        filter[1].defaultValue = updatedArray;
        this.setState({
            filter: filter
        })
    }

    passValue2 = (updatedArray) => {
        const { filter } = this.state;
        filter[2].defaultValue = updatedArray;
        this.setState({
            filter: filter
        })
    }

    passValue3 = (updatedArray) => {
        const { filter } = this.state;
        filter[3].defaultValue = updatedArray
        this.setState({
            filter: filter
        })
    }

    passValue4 = (updatedArray) => {
        const { filter } = this.state;
        filter[4].defaultValue = updatedArray
        this.setState({
            filter: filter
        })
    }

    passValue5 = (updatedArray) => {
        const { filter } = this.state;
        filter[5].defaultValue = updatedArray
        this.setState({
            filter: filter
        })
        console.log(this.state.filter[5]);
    }

    passValue6 = (updatedArray) => {
        const { filter } = this.state;
        filter[6].defaultValue = updatedArray
        this.setState({
            filter: filter
        })
        console.log(this.state.filter);
    }


    render() {

        let controlPanel = (
            <div>
                <div className={classes.MySearch}>
                    Search: <Button style={{ backgroundColor: "gray" }}
                        onClick={this.save}>Save</Button>
                    <Button style={{ backgroundColor: "gray" }}
                        onClick={this.clear}>Clear</Button>
                </div>
                <SideBar panelName="Product Type">
                    <p className={classes.SideBarBlockTitle}><span>Model Year: </span><span><input type="text" className={classes.MinYearInput} onChange={this.minModuleYearHandler} value={this.state.ModelYearMin} /></span>
                        <span>--</span>
                        <span><input className={classes.MaxYearInput} type="text" onChange={this.maxModelYearHandler} value={this.state.ModelYearMax} /></span>
                    </p>
                </SideBar>
                <SideBar panelName="Technical Specifications">
                    <div>
                        <SwapVertIcon display="inline" />
                        <p className={classes.DivBoxTitle}>Air flow (CFM)</p>
                    </div>
                    <div>
                        <RangeSlider
                            left={this.state.filter[0].defaultValue[0]}
                            right={this.state.filter[0].defaultValue[1]}
                            passValue={this.passValue}
                        />
                    </div>
                    <div>
                        <SwapVertIcon display="inline" />
                        <p className={classes.DivBoxTitle}>Max power (W)</p>
                    </div>
                    <div>
                        <RangeSlider1
                            left={this.state.filter[1].defaultValue[0]}
                            right={this.state.filter[1].defaultValue[1]}
                            passValue1={this.passValue1} />
                    </div>
                    <div>
                        <SwapVertIcon display="inline" />
                        <p className={classes.DivBoxTitle}>Sound at max speed (dBA)</p>
                    </div>
                    <div>
                        <RangeSlider2
                            left={this.state.filter[2].defaultValue[0]}
                            right={this.state.filter[2].defaultValue[1]}
                            passValue2={this.passValue2} />
                    </div>
                    <div>
                        <SwapVertIcon display="inline" />
                        <p className={classes.DivBoxTitle}>Fan sweep diameter (in)</p>
                    </div>
                    <div>
                        <RangeSlider3
                            left={this.state.filter[3].defaultValue[0]}
                            right={this.state.filter[3].defaultValue[1]}
                            passValue3={this.passValue3} />
                    </div>
                    <div>
                        <SwapVertIcon display="inline" />
                        <p className={classes.DivBoxTitle}>Height (in)</p>
                    </div>
                    <div>
                        <RangeSlider4
                            left={this.state.filter[4].defaultValue[0]}
                            right={this.state.filter[4].defaultValue[1]}
                            passValue4={this.passValue4} />
                    </div>
                </SideBar>
                <SideBar panelName="Brand"></SideBar>
                <SideBar panelName="Past Selection">
                    <div>
                        <SwapVertIcon display="inline" />
                        <p className={classes.DivBoxTitle}>Firm</p>
                    </div>
                    <div>
                        <RangeSlider5
                            left={this.state.filter[5].defaultValue[0]}
                            right={this.state.filter[5].defaultValue[1]}
                            passValue5={this.passValue5} />
                    </div>
                    <div>
                        <SwapVertIcon display="inline" />
                        <p className={classes.DivBoxTitle}>Global</p>
                    </div>
                    <div>
                        <RangeSlider6
                            left={this.state.filter[6].defaultValue[0]}
                            right={this.state.filter[6].defaultValue[1]}
                            passValue6={this.passValue6} />
                    </div>
                </SideBar>
                <SideBar panelName="Certifications"></SideBar>
            </div>
        );

        console.log(this.state);

        let productsFromBackEnd = [];
        for (let i = 0; i < this.state.data.length; i++) {
            if (
                this.state.data[i].airFlow >= this.state.filter[0].defaultValue[0] &&
                this.state.data[i].airFlow <= this.state.filter[0].defaultValue[1] &&
                this.state.data[i].maxPower >= this.state.filter[1].defaultValue[0] &&
                this.state.data[i].maxPower <= this.state.filter[1].defaultValue[1] &&
                this.state.data[i].sound >= this.state.filter[2].defaultValue[0] &&
                this.state.data[i].sound <= this.state.filter[2].defaultValue[1] &&
                this.state.data[i].fanSweepDiameter >= this.state.filter[3].defaultValue[0] &&
                this.state.data[i].fanSweepDiameter <= this.state.filter[3].defaultValue[1] &&
                this.state.data[i].height >= this.state.filter[4].defaultValue[0] &&
                this.state.data[i].height <= this.state.filter[4].defaultValue[1] &&
                this.state.data[i].firmSelected >= this.state.filter[5].defaultValue[0] &&
                this.state.data[i].firmSelected <= this.state.filter[5].defaultValue[1] &&
                this.state.data[i].globalSelected >= this.state.filter[6].defaultValue[0] &&
                this.state.data[i].globalSelected <= this.state.filter[6].defaultValue[1]
            ) {
                productsFromBackEnd.push(this.state.data[i]);
                console.log(productsFromBackEnd.length);
            }
        }

        let proinfo = (productsFromBackEnd.map((product, index) => (
            <div className={classes.proinfo}>
                <div className={classes.infobox}>
                    <nav className={classes.nav}>
                        {product.brand}<br />
                        {product.series + 'Series'}<br />
                        {product.model}
                    </nav>
                </div>
                <div className={classes.infobox2}>
                    <p className={classes.para}>{product.airFlow + ' CFM'}</p>
                    <p className={classes.para}>{product.maxPower + ' W at max speed'}</p>
                    <p className={classes.para}>{product.sound + ' dBA at max speed'}</p>
                    <p className={classes.para}>{product.fanSweepDiameter + ' " fan sweep diameter'}</p>
                </div>
                <div className={classes.infobox}>
                    <p className={classes.para2}>Past Specification:</p>
                    <p className={classes.para2}>{product.firmSelected + ' firm / ' + product.globalSelected + ' global'}</p>
                </div>
                <div className={classes.infobox}>
                    <div>
                        <Checkbox checked={this.state.data[product.id - 1].isCompare}
                            onChange={() => this.checkBoxHandler(product.id)}
                            color="primary"
                        />Compare
                        <button className={classes.add}>Add to</button>
                    </div>
                </div>
            </div>
        )));

        let rightPanel = (
            <div>
                <div className={classes.Breadcrumb}>
                    <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                        <NavLink color="inherit" to="/">
                            Mechanical
                        </NavLink>
                        <Typography color="textPrimary">HVAC Fans</Typography>
                    </Breadcrumbs>
                </div>
                {proinfo}
            </div>
        )



        return (
            <div className="Products">
                <div>
                    <Header />
                </div>
                <div className={classes.SideBar}>
                    {controlPanel}
                </div>
                <div className={classes.Body}>
                    {rightPanel}
                </div>
            </div>
        )
    }
}

export default Products;
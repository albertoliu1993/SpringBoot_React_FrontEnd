import React, { Component } from 'react';
import SearchPageInput from '../../components/UI/SearchPageInputBar/searchPageInputBar';
import classes from './search.module.css';
import logo from '../../assets/logo.png';

class Search extends Component {

    state = {
        searchValue: '',
        selection: '',
        redirect: false
    };

    onChangeHandler = (event) => {
        this.setState({
            searchValue: 'HVAC Fans',
            selection: 'Electrical',
            redirect: true
        })
        console.log(this.state);

    }

    componentDidMount(){
        console.log(this.props);
        console.log(this.state);
    }

    render() {
        if(this.state.redirect){
            this.props.history.push('/products')
        }
        
        return (
            <div className={classes.overall}>
                <div className={classes.myLogo}>
                    <img src={logo} alt="logo" height="180" items-algin="center" />
                </div>
                <p className={classes.text}>Building Products Selection Platform</p>
                <div className={classes.Search}>
                   <SearchPageInput onChange={this.onChangeHandler}/>
                </div>
            </div>
        )
    }
}

export default Search;
import React, { Component } from 'react';

import classes from './search.module.css';
import logo from '../../assets/logo.png';
import Input from '../../components/UI/Input/Input';


class Search extends Component {

    state = {
        searchForm: {
            type: {
                elementType: 'select',
                elementConfig: {
                    placeholder: 'search',
                    options: [
                        { value: 'fans', displayValue: 'HVAC Fans' },
                        { value: 'boiler', displayValue: 'Boilers' },
                        { value: 'lighting', displayValue: 'Lighting' },
                        { value: 'sink', displayValue: 'Bathroom Sinks' }
                    ]
                },
                value: '',
                validation: {},
                valid: true
            }
        },
        formIsValid: false
    }

    inputChangeHandler = (event, searchFormName) => {
        const updatedSearchForm = {
            ...this.state.searchForm,
            [searchFormName]: {
                ...this.state.searchForm[searchFormName],
                value: event.target.value,
            }
        };
        this.setState({ searchForm: updatedSearchForm });
    }

    submitHandler = (event) => {
        event.preventDefault();
        
    }

    render() {

        const formElementsArray = [];
        for (let key in this.state.searchForm) {
            formElementsArray.push({
                id: key,
                config: this.state.searchForm[key]
            });
        }
        let form = (
            <form onSubmit={this.submitHandler}>
                {formElementsArray.map(formElement => (
                    <Input
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        invalid={!formElement.config.valid}
                        touched={formElement.config.touched}
                        changed={(event) => this.inputChangeHandler(event, formElement.id)}
                        search={(event) => this.inputChangeHandler(event, formElement.id)}
                    />
                ))}
            </form>
        );


        return (
            <div className={classes.overall}>
                <div className={classes.myLogo}>
                    <img src={logo} alt="logo" height="180" items-algin="center" />
                </div>
                <p className={classes.text}>Building Products Selection Platform</p>
                <div className={classes.Search}>
                    {form}
                </div>
            </div>
        )
    }
}

export default Search;
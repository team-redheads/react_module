import React, { Component } from 'react';
import Header from '../components/Header'

export default class Personal extends Component{
    render() {
        return (
            <React.Fragment>
                <Header title={'Личный кабинет'} />
                <div>
                    Personal Room
                </div>
            </React.Fragment>
        );
    }
}
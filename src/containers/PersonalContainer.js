import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {getUserByIdRequest, updateUserByIdRequest} from "../actions/actionUser";
import jwt from "jwt-decode";
import jwtDecode from "../_utils/checkExp";


import Header from '../components/Header';
import HeaderPersonal from '../components/HeaderPersonal';
import Profile from '../components/Profile'
import UserTickets from '../components/UserTickets'

class PersonalContainer extends Component{
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.getUserByIdRequest(id);

        const token = localStorage.getItem('token');
        return !(jwtDecode(token)) ? this.props.history.push('/auth') : null
    }
    getInitialValues () {
        const { user } = this.props;
        return {
            firstName: user.local.firstName,
            lastName: user.local.lastName,
            email: user.local.email
        };
    }
    takeValueProfile = values => {
        const { id } = this.props.match.params;
        // console.log('---------  value_profile', values);
        this.props.updateUserByIdRequest({ id: id, values });
        this.props.getUserByIdRequest(id);
    };

    render() {
        const { user } = this.props;
        // const { id } = this.props.match.params;
        // console.log('render user ', user);

        return (
            <React.Fragment>
                <Header title={'Личный кабинет'} />
                <React.Fragment>
                    <HeaderPersonal user={ user } />
                    {
                        user && <div className="personal-block__content">
                            <Switch>
                                <Route exact
                                       path={`/personal/${user._id}`}
                                       render={ () => (
                                           <Profile user={user}
                                                    onSubmit={this.takeValueProfile}
                                                    initialValues={this.getInitialValues()}
                                           />
                                       )}
                                />
                                <Route exact
                                    // path="/personal/tickets"
                                       path={`/personal/${ user._id}/tickets`}
                                       // component={ <UserTickets />}
                                       render={ () => (
                                           <UserTickets />
                                       )}
                                />
                            </Switch>
                        </div>
                    }

                </React.Fragment>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user.data
});
const mapDispatchToProps = dispatch => bindActionCreators(
    {
        getUserByIdRequest,
        updateUserByIdRequest
    }, dispatch);

PersonalContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PersonalContainer);

export default PersonalContainer
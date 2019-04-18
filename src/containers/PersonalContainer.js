import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {getUserByIdRequest, updateUserByIdRequest} from "../actions/actionUser";
import {getMovieRequest} from "../actions/actionMovie";
import {getSessionRequest} from "../actions/actionSession";
import {getRoomNamesRequest} from '../actions/roomNames';
// import jwt from "jwt-decode";
// import jwtDecode from "../_utils/checkExp";


import Header from '../components/Header';
import HeaderPersonal from '../components/HeaderPersonal';
import Profile from '../components/Profile'
import UserTickets from '../components/UserTickets'



class PersonalContainer extends Component{
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.getUserByIdRequest(id);
        this.props.getMovieRequest();
        this.props.getSessionRequest();
        this.props.getRoomNamesRequest();

        // const token = localStorage.getItem('token');
        // return !(jwtDecode(token)) && this.props.history.push('/auth')
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
        this.props.updateUserByIdRequest({ id: id, values });
        this.props.getUserByIdRequest(id);
    };

    render() {
        const { user, session, movie, roomNames } = this.props;

        return (
            <React.Fragment>
                <Header title={'Личный кабинет'} />
                <React.Fragment>
                    <HeaderPersonal user={ user }/>
                    {
                        user && <div className="personal-block__content">
                            <Switch>
                                <Route exact
                                       path={`/personal/${user._id}`}
                                       // path={`/${match.url}`}
                                       render={ () => (
                                           <Profile user={user}
                                                    onSubmit={this.takeValueProfile}
                                                    initialValues={this.getInitialValues()}
                                           />
                                       )}
                                />
                                <Route
                                       path={`/personal/${ user._id}/tickets`}
                                       // path={`/${match.url}/:id`}
                                       render={ () => (
                                           <UserTickets user={user}
                                                        movie={movie && movie}
                                                        session={session && session}
                                                        roomName={roomNames && roomNames.rooms}
                                           />
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
    user: state.user.data,
    session: state.session.data,
    movie: state.movie.data,
    roomNames: state.roomNames.data
});
const mapDispatchToProps = dispatch => bindActionCreators(
    {
        getUserByIdRequest,
        updateUserByIdRequest,
        getMovieRequest,
        getSessionRequest,
        getRoomNamesRequest
    }, dispatch);

PersonalContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PersonalContainer);

export default PersonalContainer
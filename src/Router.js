import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

// import 'moment-timezone';
import 'moment/locale/ru';
import HallPage from './containers/hallPage/HallPage.js'

import Header from './components/header/index';
import DetailsMoviePageContainer from './containers/detailsMoviePageContainer';
import MovieContainer from './containers/movieContainer'
import TrailerPage from './components/trailerPage';
import Auth from './containers/auth';


class Router extends Component {
    render() {
        return (
            <div className="page-wrapper">
                <Header />
                <Switch>
            {/* --- LIST WITH FILMS --- */}
                    <Route exact path="/" component={ MovieContainer } />
                    <Route exact path="/movie/:id" component={ DetailsMoviePageContainer } />
                    <Route exact path="/trailer/:url" component={ TrailerPage } />
                    <Route exact path="/login" component={ Auth } />
                    <Route exact path="/hall" component={ HallPage } />
                    <Route render={() => <div className='notFound'>404 NOT FOUND</div>} />
                </Switch>
            </div>
        );
    }
}

export default Router;

import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
// import './App.css';
import './styles/index.scss';

// import 'moment-timezone';
import 'moment/locale/ru';

import Header from './components/header/index';
import DetailsMoviePageContainer from './containers/detailsMoviePageContainer';
import MovieContainer from './containers/movieContainer'
import TrailerPage from './components/trailerPage';


class App extends Component {
  render() {
    return (
        <div className="wrapper">
          <Header />
          <Switch>
            {/* --- LIST WITH FILMS --- */}
            <Route exact path="/" component={ MovieContainer } />
            <Route exact path="/movie/:id" component={ DetailsMoviePageContainer } />
            <Route exact path="/trailer/:url" component={ TrailerPage } />
            <Route render={() => <div className='notFound'>404 NOT FOUND</div>} />
          </Switch>
        </div>
    );
  }
}

export default App;

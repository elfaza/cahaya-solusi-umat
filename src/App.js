import React from 'react';
import Grid from "@material-ui/core/Grid";
import Header from './components/Layout/Header';
import LandingPage from './components/Homepage';
import Footer from './components/Layout/Footer';
import { Router, Switch, Route } from 'react-router-dom';
import history from './history';
import Product from './components/Product';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <div className="loader">
          <div className="loader-inner">
            <div className="cssload-loader"></div>
          </div>
        </div>
        <Header pathname={this.props.location} />
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/products" component={Product} />
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/layout/Header';
import AllCountries from './components/pages/AllCountries';
import About from './components/pages/About';
import Alert from './components/layout/Alert';
import CountryState from './context/country/CountryState';
import AlertState from './context/alert/AlertState';
import CountryDetails from './components/country/CountryDetails';
import NotFound from './components/pages/NotFound';
import Regions from './components/pages/Regions';
import Footer from './components/layout/Footer';

import './App.css';

const App = () => {
    return (
        <CountryState>
            <AlertState>
                <Router>
                    <Header />
                    <div className="container">
                        <Alert />
                        <Switch>
                            <Route exact path="/" component={Regions} />
                            <Route exact path="/all-countries" component={AllCountries} />
                            <Route exact path="/about" component={About} />
                            <Route exact path="/country/:name" component={CountryDetails} />
                            <Route component={NotFound} />
                        </Switch>
                    </div>
                    <Footer/>
                </Router>
            </AlertState>
        </CountryState>
    )
}

export default App;

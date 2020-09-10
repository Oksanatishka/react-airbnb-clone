import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import SearchPage from './SearchPage';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    return (
        <div className="app">
            <Router>
                {/* <h1>Let's build Airbnb!</h1> */}
                <Header />

                <Switch>
                    <Route path="/search">
                        <SearchPage />
                    </Route>

                    {/* have Home route as the last here */}
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>

                <Footer />
            </Router>
        </div>
    );
}

export default App;

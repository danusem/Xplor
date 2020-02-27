import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import Home from './pages/Home/Home';
import Destinations from './pages/Destinations/Destinations';

import './App.css';

function App() {
  return (
    <div className="App-outer-container">
       <Navbar />
       <div className="App-inner-container">
          <Switch>
            <Route exact path="/" render={props =>
              <Home />
            }/>
             <Route exact path="/destinations" render={props =>
              <Destinations />
            }/>
          </Switch>
       </div>
       <Footer /> 
    </div>
  );
}

export default App;
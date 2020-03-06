import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import Home from './pages/Home/Home';
import Destinations from './pages/Destinations/Destinations';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';

import './App.css';
import userService from './utils/userService';
import destinationService from './utils/destinationService';

class App extends Component {

  state = {
    user: userService.getUser(),
    destinations: [],
    featuredDestinations: []
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser()}, () => {
      this.handleAddDestination();
    })
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null, destinations: [] });
  }

  handleAddDestination = (destination) => {

    
    this.setState({
      destination: this.state.destinations.push(destination)
    })

  }

  handleGetFeaturedDestinations = async () => {
    const { featuredDestinations } = await destinationService.getFeatured();
    this.setState ({ featuredDestinations });
  }

  async componentDidMount() {
    if(userService.getUser()) {
      const { destinations } = await destinationService.index();
      this.handleGetFeaturedDestinations();
      this.setState({ destinations });
    }
  }

  render() {
    return (
      <div className="App-outer-container">
        <Navbar handleLogout={this.handleLogout} />
        <div className="App-inner-container">
            <Switch>
              <Route exact path="/" render={props =>
                <Home featuredDestinations={this.state.featuredDestinations} />
              }/>
              <Route exact path="/destinations" render={props =>
                userService.getUser()
                ? <Destinations 
                  {...props} 
                  destinations={this.state.destinations}
                  handleAddDestination={this.handleAddDestination}
                />
                : <Redirect to="/login" />
              }/>
              <Route exact path="/login" render={props =>
                <Login 
                {...props}
                  handleSignupOrLogin={this.handleSignupOrLogin}
                />
              }/>
              <Route exact path="/signup" render={props =>
                <Signup 
                  {...props} 
                  handleSignupOrLogin={this.handleSignupOrLogin}
                />
              }/>
            </Switch>
        </div>
        <Footer /> 
      </div>
    );
  }
}

export default App;
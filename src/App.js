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
import { getCurrentLatLng } from './utils/getCurrLocationService';
import { getCurWeatherByLatLng } from './utils/weatherService';

class App extends Component {

  state = {
    user: userService.getUser(),
    destinations: [],
    featuredDestinations: [],
    lat: null,
    lng: null,
    temp: '',
    icon: null
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser()}, () => {
      this.handleGetDestinations();
    })
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null, destinations: [] });
  }

  handleGetDestinations = async () => {
    const { destinations } = await destinationService.index();
    this.setState({ destinations })
  }

  handleGetFeaturedDestinations = async () => {
    const { featuredDestinations } = await destinationService.getFeatured();
    this.setState ({ featuredDestinations });
  }

  handleGetCurrentWeather = async () => {
    const { lat, lng } = await getCurrentLatLng();
    const weatherData = await getCurWeatherByLatLng(lat, lng);
    this.setState({
      lat,
      lng,
      temp: Math.round(weatherData.main.temp),
      icon: weatherData.weather[0].icon
    });
    console.log(weatherData);
    console.log(lat, lng);
  }

  async componentDidMount() {
    if(userService.getUser()) {
      const { destinations } = await destinationService.index();
      this.handleGetFeaturedDestinations();
      this.setState({ destinations });
      this.handleGetCurrentWeather();
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
                  handleGetDestinations={this.handleGetDestinations}
                  handleGetCurrentWeather={this.handleGetCurrentWeather}
                  temp={this.state.temp}
                  icon={this.state.icon}
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
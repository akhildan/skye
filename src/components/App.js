import React from 'react';
import axios from 'axios';
import '../Style.css'
import CitySearch from './CitySearch';
import WeatherCard from './WeatherCard'
const API_KEY = process.env.REACT_APP_API_KEY 

class App extends React.Component{

    state = {weatherResult: null}

    onSearchSubmit = async (searchInputValue) => {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${searchInputValue}&appid=${API_KEY}`)
        this.setState({weatherResult: response.data})
     }
    render() {
        return(
            <div className="container p-4">
                 <CitySearch onSearchSubmit = {this.onSearchSubmit} />
                 {this.state.weatherResult ?  <WeatherCard weatherResult = {this.state.weatherResult} /> : <div></div>}
            </div>
        )
    }

}

export default App;
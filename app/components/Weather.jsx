var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
//http://api.openweathermap.org/data/2.5/weather?q=London,UK&units=imperial&appid=30e3d7b9b3383c7bf7487aa366d22f18
var Weather = React.createClass({

  getInitialState: function() {
    return {
      isLoading: false
    }
  },
  handleSearch: function(location) {
    var that = this;

    this.setState({
      isLoading: true,
      errorMessage: undefined,
      location: undefined,
      temp: undefined

    });

    openWeatherMap.getTemp(location).then(function(temp) {
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function(errorMessage) {
      that.setState({isLoading: false});
      alert(errorMessage)
    })

  },
  componentDidMount: function(){
    var location = this.props.location.query.location;
    if (location && location.length > 0) {
      this.handleSearch(location);
    window.location.hash = '#/';
    }
  },

  componentWillReceiveProps: function(newProps) {
    var location = newProps.location.query.location;
    if (location && location.length > 0) {
      this.handleSearch(location);
    window.location.hash = '#/';
    }
  },

  render: function(){
    var {temp, location, isLoading} = this.state;

    function renderMessage(){
      if (isLoading) {
        return <h3 className="text-center">Fetching weather...</h3>;
      } else if(temp && location) {
        return <WeatherMessage temp={temp} location={location}/>;

      }
    }

    return (
      <div>
        <h1 className="text-center page-title">Get Weather </h1>
        <h3 className="text-center"> Enter any city.</h3>

        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}

      </div>

    );
  }
});

module.exports = Weather;

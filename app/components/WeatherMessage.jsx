var React = require('react');

var WeatherMessage = ({temp, location}) => {
  //var {temp, location} = props;
  return (
    <div>
      <h3>It's {temp} degrees F in {location}</h3>

    </div>
  );
}
module.exports = WeatherMessage;

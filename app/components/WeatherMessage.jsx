var React = require('react');

var WeatherMessage = ({temp, location}) => {
  //var {temp, location} = props;
  return (
    <div>
      <h3 className="text-center">It's {temp} degrees F in {location}</h3>
      <br/>
      <br/>
      <br/>

    </div>
  );
}
module.exports = WeatherMessage;

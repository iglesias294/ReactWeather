var React = require('react');
var {Link, IndexLink} = require('react-router');


var Nav = (props) => {
  return (
    <div>
      <h2>The navbar</h2>
      <IndexLink to="/" activeClassName="active" style={{margin: 10}}> Get Weather </IndexLink>
      <Link to="/about" activeClassName="active" style={{margin: 10}}> About </Link>
      <Link to="/examples" activeClassName="active" style={{margin: 10}}> Examples </Link>
    </div>
  );
};

module.exports = Nav;

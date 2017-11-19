var React = require('react');


var Footer = (props) => {
  return (
  <div>
    <footer className="marketing-site-footer">
      <div className="row medium-unstack">
        <div className="medium-4 columns">
          <h4 className="marketing-site-footer-name">Arturo Iglesias</h4>
          <strong>破釜沉舟 </strong>
          <ul className="menu marketing-site-footer-menu-social simple">
            <li>
              <a href="#">
                <i className="fa fa-youtube-square" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-facebook-square" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-twitter-square" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="medium-4 columns">
          <h4 className="marketing-site-footer-title">Contact Info</h4>
          <div className="marketing-site-footer-block">
            <i className="fa fa-map-marker" aria-hidden="true"></i>
            <p>Virginia, United States</p>
          </div>
          <div className="marketing-site-footer-block">
            <i className="fa fa-phone" aria-hidden="true"></i>
            <p>202-XXX-XXXX</p>
          </div>
          <div className="marketing-site-footer-block">
            <i className="fa fa-envelope-o" aria-hidden="true"></i>
            <p>arturo@fakeemail.com</p>
          </div>
        </div>
        <div className="medium-4 columns">
          <h4 className="marketing-site-footer-title">Instagram</h4>
          <div className="row small-up-3">
            <div className="column column-block">
              <img src="https://placehold.it/75" alt=""/>
            </div>
            <div className="column column-block">
              <img src="https://placehold.it/75" alt=""/>
            </div>
            <div className="column column-block">
              <img src="https://placehold.it/75" alt=""/>
            </div>
            <div className="column column-block">
              <img src="https://placehold.it/75" alt=""/>
            </div>
            <div className="column column-block">
              <img src="https://placehold.it/75" alt=""/>
            </div>
            <div className="column column-block">
              <img src="https://placehold.it/75" alt=""/>
            </div>
          </div>
        </div>
      </div>
      <div className="marketing-site-footer-bottom">
        <div className="row large-unstack align-middle">
          <div className="column">
            <p>&copy; 2017 All rights reserved</p>
          </div>

        </div>
      </div>
    </footer>
  </div>

)};

module.exports = Footer;

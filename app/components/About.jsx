var React = require('react');

//This is a stateless functional component
var About = (props) => {
  return (<div>


    <div className="neat-article-container">
      <div className="row large-8 columns align-center">
        <div className="neat-article-header">
          <div className="article-header-avatar">
            <img className="header-avatar" src="https://i.imgur.com/3AeQRbR.jpg"/>
          </div>
          <div className="article-header-author">
            <p className="author-name">
              Arturo Iglesias
            </p>
            <p className="author-description">
              Aspiring Everythingist
            </p>
            <p className="article-date-read">November 2017</p>
          </div>
        </div>
        <div className="neat-article-title">
          <h3 className="article-title">
            How to fail at everything and still come out ahead.
          </h3>
        </div>
      </div>
      <div className="neat-article-image">
        <img className="article-image" src="https://i.imgur.com/0buQ75a.jpg" alt="Space"/>
      </div>
      <div className="row neat-article-content">
        <div className="small-2 large-2 columns" data-sticky-container="data-sticky-container">
          <div className="sticky article-social" data-sticky="data-sticky" data-anchor="sticky1" data-sticky-on="small">
            <div className="rounded-social-buttons">
              <a className="social-button facebook" href="#"></a>
              <a className="social-button twitter" href="#"></a>
              <a className="social-button google-plus" href="#"></a>
            </div>
          </div>
        </div>
        <div className="small-10 columns" id="sticky1">
          <div className="article-content">
            <p>
              First I was the general IT guy for a 3D printing startup. I first got into coding by tweaking templates and plugins needed to run our online ecommerce site. This taught me all I needed to know about HTML and CSS, how to speed things up with different frameworks, and enough jQuery to be dangerous.
            </p>
            <p>
              My first introduction to web apps came from a Ruby on Rails course. From here I understood the concepts of REST, CRUD, and MVC.
              I started learning "real programming" by using FreeCodeCamp's tutorials and algorithm scripting challenge. Most of the challenges are overkill and the important thing is understanding callback functions, objects, and classes.  </p>
            <p>
              React is more complicated than it needs to be, documentation is very scattered and few guides focus on getting to a minimal viable RESTFUL web app. The hardest part was putting tons of different tutorials together.
            </p>

          </div>
        </div>
      </div>

    </div>

  </div>);

};

module.exports = About;

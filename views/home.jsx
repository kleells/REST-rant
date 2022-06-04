const React = require('react');
const Def = require('./default');

function home () {
    return (
        <Def>
          <main>
            <h1>REST-Rant</h1>
          <div>
            <img src="https://cdn.pixabay.com/photo/2016/11/18/22/21/restaurant-1837150_960_720.jpg" alt="Interior of a restaurant" />
          </div>
            <a href="/places">
              <br></br>
              <p className="intro">Welcome! Explore and contribute to the vast variety of restaurants... leave honest comments only.</p>
              <button className="btn-info">Places Page</button>
              
          </a>
          </main>
        </Def>
    )
};

module.exports = home
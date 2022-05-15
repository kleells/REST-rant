const React = require('react');
const Def = require('./default');

function home () {
    return (
        <Def>
          <main>
            <h1>REST-Rant</h1>
          <div>
            <img src="/images/tacos.jpeg" alt="Tacos with a squeeze of lime" />
          <div>
            Photo by <a href="https://unsplash.com/@briewilly">Chad Montano</a> on <a href="https://unsplash.com/">Unsplash</a>
          </div>
          </div>
            <a href="/places">
              <button className="btn-primary">Places Page</button>
          </a>
          </main>
        </Def>
    )
};

module.exports = home
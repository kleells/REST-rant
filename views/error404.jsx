const React = require ('react');
const Def = require('./default');

function error404 () {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                    <p>You seem lost... click on Home to redirect</p>
                <div>
                    <img src="https://cdn.pixabay.com/photo/2019/04/24/14/03/map-4152197__340.jpg" alt="Picture of a map" />
                    <div>
                        Photo by <a href="https://pixabay.com/users/gregroose-2823595/">Gregory Roose</a>
                    </div>
                </div>
            </main>
        </Def>
    )
}

module.exports = error404
const React = require ('react');
const Def = require('./default');

function error404 () {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <div>
                    <img src="/images/LostError404.jpeg" alt="Pug in a blanket" />
                    <div>
                        Photo by <a href="https://i.picsum.photos/id/1025/4951/3301.jpg?hmac=_aGh5AtoOChip_iaMo8ZvvytfEojcgqbCH7dzaz-H8Y">Lorem Picsum</a><a href="https://picsum.photos/images"></a>
                    </div>
                </div>
                <p>You seem lost... 404 Page not found</p>
            </main>
        </Def>
    )
}

module.exports = error404
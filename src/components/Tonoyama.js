import React from 'react';
import Card from './Card/Tonoyama_Card.js'
import Menu from './Menu.js'
import tonoyama from './assets/images/tonoyama.jpg'
import MediaQuery from 'react-responsive'

const Tonoyama = () => {

    return (
        <div className="Body">
            <MediaQuery query="(max-width: 780px)">
                <Menu />
                <Card />
            </MediaQuery>
            <MediaQuery query="(min-width: 779px)">
                <Card />
            </MediaQuery>
        </div>
    );
}

export { Tonoyama };

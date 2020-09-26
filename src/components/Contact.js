import React from 'react';
import './assets/styles/Contact.css';
import Twitter from './assets/images/icons/Twitter_Icon.png';
import Github from './assets/images/icons/GitHub-Mark.png';
import MediaQuery from 'react-responsive'
import Menu from './Menu.js'

const Contact = () => {
    return (
        <div className="wrapper">
            <MediaQuery query="(max-width: 780px)">
                <div className="App-body">
                    <Menu />
                    <p className="Bold-font">Follow Me!</p>
                    <a href="https://twitter.com/yudaitonoyama" target="_blank" rel="noreferrer noopener">
                        <img src={Twitter} alt="Twitter" className="icon-twitter" />
                    </a>
                    <a href="https://github.com/Tonoyama" target="_blank" rel="noreferrer noopener">
                        <img src={Github} alt="Github" className="icon-github" />
                    </a>
                    <div className="Bold-font">
                        <p>Email</p>
                        <p>gp20a087[at]oecu.jp</p>
                    </div>
                </div>
            </MediaQuery>
            <MediaQuery query="(min-width: 779px)">
                <div className="App-body">
                    <p className="Bold-font">Follow Me!</p>
                    <a href="https://twitter.com/yudaitonoyama" target="_blank" rel="noreferrer noopener">
                        <img src={Twitter} alt="Twitter" className="icon-twitter" />
                    </a>
                    <a href="https://github.com/Tonoyama" target="_blank" rel="noreferrer noopener">
                        <img src={Github} alt="Github" className="icon-github" />
                    </a>
                    <div className="Bold-font">
                        <p>Email</p>
                        <p>gp20a087[at]oecu.jp</p>
                    </div>
                </div>
            </MediaQuery>
        </div>
    );
}

export { Contact };

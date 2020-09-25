import React from 'react';
import './Contact.css';
import Twitter from './images/icons/Twitter_Icon.png';
import Github from './images/icons/GitHub-Mark.png';

const Contact = () => {
    return (
        <div className="App-body">
            <p className="Bold-font">Contact</p>
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
    );
}

export { Contact };

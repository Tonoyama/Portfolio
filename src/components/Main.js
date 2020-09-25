import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { About } from './About';
import { Contact } from './Contact';
import { Tonoyama } from './Tonoyama';

const Main = () => {
    return (
        <Switch>
            <Route exact path='/' component={Tonoyama}></Route>
            <Route exact path='/about' component={About}></Route>
            <Route exact path='/contact' component={Contact}></Route>
        </Switch>
    );
}

export { Main };

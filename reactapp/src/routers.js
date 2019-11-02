import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './Home';
import About from './About';

const Content = () => (
    <Switch>
        <Route exact path='/About' component={About}/>
        <Route path='/' component={Home} />
        {/* <Route exact path='/DIY' component={DIY}/>
        <Route exact path='/WebCam' component={WebCam}/> */}
    </Switch>
)

export default Content;
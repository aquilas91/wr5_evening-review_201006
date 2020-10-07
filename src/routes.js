import React from 'react';
import { Switch, Route } from 'react-router-dom';
import GuestLanding from './Components/GuestLanding';
import UserLanding from './Components/UserLanding';

export default (
    <Switch>
        <Route exact path='/' component={GuestLanding} />
        <Route path='/userlanding' component={UserLanding} />
    </Switch>
)
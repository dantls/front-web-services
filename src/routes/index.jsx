import React from 'react';
import Route from './Route';
import {
    Switch,
} from 'react-router-dom';

import {SignIn} from '../pages/SignIn';

import {Dashboard} from '../pages/Dashboard';

export default function Routes(){
    return(
        <Switch>
            <Route component={SignIn} path="/"exact />
            <Route isPrivate path="/dashboard" component={Dashboard} exact />
        </Switch>
    );
}
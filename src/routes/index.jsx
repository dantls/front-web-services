import React from 'react';
import Route from './Route';
import {
    Switch,
} from 'react-router-dom';

import {SignIn} from '../pages/SignIn';

import {Dashboard} from '../pages/Dashboard';
import { Detail } from '../pages/Detail';

export default function Routes(){
    return(
        <Switch>
            <Route component={SignIn} path="/"exact />
            <Route isPrivate component={Dashboard} path="/dashboard" exact />
            <Route isPrivate component={Detail} path="/detail" exact />
        </Switch>
    );
}
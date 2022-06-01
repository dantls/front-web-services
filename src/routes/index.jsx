import React from 'react';
import Route from './Route';
import {
    Switch,
} from 'react-router-dom';

import {SignIn} from '../pages/SignIn';

import { Dashboard } from '../pages/Dashboard';
import { PickingDashboard } from '../pages/PickingDashboard';
import { Detail } from '../pages/Detail';
import { Details } from '../pages/Details';
import { Main } from '../pages/Main';

export default function Routes(){
    return(
        <Switch>
            <Route component={SignIn} path="/"exact />
            <Route isPrivate component={Dashboard} path="/dashboard" exact />
            <Route isPrivate component={PickingDashboard} path="/picking" exact />
            <Route isPrivate component={Main} path="/main" exact />
            <Route isPrivate component={Detail} path="/detail/:order" exact />
            <Route isPrivate component={Details} path="/details" exact />
        </Switch>
    );
}
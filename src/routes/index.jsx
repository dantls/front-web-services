import React from 'react';
import Route from './Route';
import {
    Switch,
} from 'react-router-dom';

import {SignIn} from '../pages/SignIn';

import { Dashboard } from '../pages/Dashboard';
import { Shipment2Dashboard } from '../pages/Shipment2Dashboard';
import { PickingsDashboard } from '../pages/PickingsDashboard';
import { MovementsDashboard } from '../pages/MovementsDashboard';
import { Detail } from '../pages/Detail';
import { Details } from '../pages/Details';
import { Main } from '../pages/Main';

export default function Routes(){
    return(
        <Switch>
            <Route component={SignIn} path="/"exact />
            <Route isPrivate component={Shipment2Dashboard} path="/shipment2" exact />
            <Route isPrivate component={Dashboard} path="/dashboard" exact />
            <Route isPrivate component={PickingsDashboard} path="/pickings" exact />
            <Route isPrivate component={MovementsDashboard} path="/movements" exact />
            <Route isPrivate component={Main} path="/main" exact />
            <Route isPrivate component={Detail} path="/detail/:order" exact />
            <Route isPrivate component={Details} path="/details" exact />
        </Switch>
    );
}
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/home'
import Detail from './pages/detail'

export default () => (
    <Switch>
        <Route exact path="/" component={ Home }/>
        <Route exact path="/detail/:id" component={ Detail }/>
    </Switch>
)
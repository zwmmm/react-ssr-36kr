import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/home'
import List from './pages/list'

const RouterConfig = () => (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/list" component={List}/>
    </Switch>
)

ReactDom.render(
    <BrowserRouter>
        <RouterConfig/>
    </BrowserRouter>,
    document.getElementById('app')
)
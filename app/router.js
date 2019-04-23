import React from 'react';
import Home from './pages/home'
import Detail from './pages/detail'

export default [
    {
        path: '/',
        component: Home,
        exact: true,
    },
    {
        path: '/detail/:id',
        component: Detail,
        exact: true,
    },
]

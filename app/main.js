import ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import RouterConfig from './router'

ReactDom.render(
    <BrowserRouter>
        <RouterConfig/>
    </BrowserRouter>,
    document.getElementById('app')
)
import { Fragment } from 'react';
import React from 'react';

export default function ({ loaded, children }) {
    const page = loaded ? <div>加载中....</div> : children
    return <Fragment>{ page }</Fragment>
}
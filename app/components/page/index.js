import React from 'react';
import Loading from '../spinner'

export default function ({ loaded, children }) {
    return (
        <div>
            { children }
            { loaded ? <Loading/> : null }
        </div>
    )
}
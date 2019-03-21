import React from 'react';
import Loading from '../components/Spinner'

export default function ({ loaded, children }) {
    return (
        <div>
            { children }
            { loaded ? <Loading/> : null }
        </div>
    )
}
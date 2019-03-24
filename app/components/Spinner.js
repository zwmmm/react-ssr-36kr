import React from 'react';
import className from 'classnames';

export default props => (
    <div className={ className('circles-to-rhombuses-spinner', props.className) }>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
    </div>
)
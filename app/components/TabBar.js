import React, { useState, Children, cloneElement } from 'react';
import classname from 'classnames';

const Title = props => {
    const { info, onClick, active } = props;
    return (
        <div
            className={ classname('tab-bar-title', { active }) }
            onClick={ () => onClick(info.index) }
        >
            { info.title }
        </div>
    )
}

function TabBar(props) {
    let [ active, setActive ] = useState(0);
    let style = {
        'transform': `translate3d(${ active * -100 }%, 0px, 0px)`
    }
    const { tabs, children } = props;
    return (
        <div>
            <div className="tab-bar-top">
                { tabs.map(item => <Title
                    info={ item }
                    key={ item.index }
                    active={ item.index === active }
                    onClick={ index => setActive(index) }
                />) }
            </div>
            <div className="tab-bar-content" style={ style }>
                { Children.map(children, (item, i) => (
                    cloneElement(item, {
                        style: active === i ? { 'height': 'calc(100vh - 92px)', 'overflowY': 'scroll' } : {}
                    })
                )) }
            </div>
        </div>
    )
}

export default TabBar;
import React from 'react';
import Loading from '../components/Spinner';
import { Link } from 'react-router-dom';
import Time from './Time'

const Item = props => {
    const { cover, title, user_info, published_at, id } = props;
    const userInfo = JSON.parse(user_info);
    const style = {
        background: `url('${ cover }') no-repeat center / cover`
    }
    return (
        <li className="column-item">
            <Link to={`/detail/${ id }`}>
                <div className="column-left" style={ style }/>
                <div className="column-right">
                    <h2 className="column-right-title">{ title }</h2>
                    <div className="column-right-info">
                        { userInfo.name }·<Time time={ published_at }/>
                    </div>
                </div>
            </Link>
        </li>
    )
}

export default class News extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // 创建观察对象
        this.io = new IntersectionObserver(this.handlerReachBottom);
        this.io.observe(document.querySelector('#column-box .loading'));
    }

    componentWillUnmount() {
        this.disconnect();
    }

    // 卸载观察
    disconnect = () => {
        this.io.disconnect();
    }

    // 到底加载更多
    handlerReachBottom = changes => {
        const change = changes[ 0 ];
        if (!change.isIntersecting) return;
        const { onReachBottom } = this.props;
        onReachBottom();
    }

    render() {
        const { data, style } = this.props;
        return (
            <ul id="column-box" style={ style }>
                { data.map(item => <Item { ...item } key={ item.id }/>) }
                <Loading className="loading"/>
            </ul>
        )
    }
}
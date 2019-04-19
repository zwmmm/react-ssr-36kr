import React from 'react'
import Loading from '../spinner'
import Time from '../time'
import styles from './new.less'

function getDate(time) {
    let sTime = new Date(time);
    return {
        m: sTime.getMonth() + 1,
        d: sTime.getDate(),
    }
}

const Left = props => (
    <div className={ styles.left }>
        <div>
            <div>{ props.m }月</div>
            <div>{ props.d }</div>
        </div>
    </div>
)

const Item = props => {
    const { title, description, published_at, user, preItem } = props;
    // 如果和上一个新闻同一天就不显示时间
    let isChange = true;
    const { m, d } = getDate(published_at);
    if (preItem) {
        const time = getDate(preItem.published_at);
        isChange = m !== time.m || d !== time.d;
    }
    return (
        <li className={ styles.item }>
            { isChange ? <Left m={ m } d={ d }/> : null }
            <div className={ styles.right }>
                <h2 className={ styles.title }>{ title }</h2>
                <p className={ styles.descript }>{ description }</p>
                <div className={ styles.user }>
                    <img className={ styles.avatar } src={ user.avatar_url }/>
                    <span className={ styles['user-name'] }>{ user.name }</span>
                    <Time time={ published_at }/>
                </div>
            </div>
        </li>
    )
}

export default class Index extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // 创建观察对象
        this.io = new IntersectionObserver(this.handlerReachBottom);
        this.io.observe(document.querySelector('#news-box .loading'));
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
        const change = changes[0];
        if (!change.isIntersecting) return;
        const { data, onReachBottom } = this.props;
        const preItem = data[data.length - 1];
        const endID = preItem ? preItem.id : undefined;
        onReachBottom(endID);
    }

    render() {
        const { data, style } = this.props;
        return (
            <ul id="news-box" style={ style }>
                { data.map((item, i) => <Item { ...item } key={ item.id } preItem={ data[i - 1] }/>) }
                <Loading className="loading"/>
            </ul>
        )
    }
}
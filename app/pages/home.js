import React from 'react';
import { connect } from 'react-redux';
import * as homeActions from '../redux/actions/home';
import New from '../components/new';
import Top from '../components/top';
import TabBar from '../components/tab-bar';
import Column from '../components/column';
import { Button } from 'antd-mobile';

function mapStateToProps(state) {
    return { ...state.home };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchHome: (id) => dispatch(homeActions.fetchHome(id)),
        fetchColumn: (page) => dispatch(homeActions.fetchColumn(page)),
    }
}

class Home extends React.Component {
    state = {
        tabs: [
            { title: '科技新闻', index: 0 },
            { title: '24h快讯', index: 1 }
        ],
        columnPage: this.props.column.length > 0 ? 1 : 0,
    }

    static asyncData(store) {
        const { fetchHome, fetchColumn } = mapDispatchToProps(store.dispatch);
        // 这里必须return Promise 并且这里发起请求走的是node环境，api路径必须写绝对路径。
        return Promise.all([
            fetchHome(),
            fetchColumn(),
        ])
    }

    handlerReachBottom = (id) => {
        this.props.fetchHome(id);
    }

    handlerColumnReachBottom = () => {
        this.setState(
            state => ({ ...state, columnPage: state.columnPage + 1 }),
            () => {
                this.props.fetchColumn(this.state.columnPage);
            }
        )
    }

    render() {
        const { loaded, news, column, columnLoaded } = this.props;
        return (
            <div>
                <Top/>
                <Button>点击</Button>
                <TabBar tabs={ this.state.tabs }>
                    <Column loaded={ columnLoaded } data={ column } onReachBottom={ this.handlerColumnReachBottom }/>
                    <New loaded={ loaded } data={ news } onReachBottom={ this.handlerReachBottom }/>
                </TabBar>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

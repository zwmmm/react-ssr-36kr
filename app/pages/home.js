import React from 'react';
import { connect } from 'react-redux';
import * as homeActions from '../redux/actions/home';
import News from '../components/News'
import Top from '../components/Top'
import TabBar from '../components/TabBar'
import Column from '../components/Column'

function mapStateTpProps(state) {
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
        columnPage: 1,
    }
    componentDidMount() {
        const { news, fetchHome, column, fetchColumn } = this.props;
        news.length > 0 || fetchHome();
        column.length > 0 || fetchColumn();
    }

    handlerReachBottom = (id) => {
        console.log(111)
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
                <TabBar tabs={ this.state.tabs }>
                    <Column loaded={ columnLoaded } data={ column } onReachBottom={ this.handlerColumnReachBottom }/>
                    <News loaded={ loaded } data={ news } onReachBottom={ this.handlerReachBottom }/>
                </TabBar>
            </div>
        )
    }
}

export default connect(mapStateTpProps, mapDispatchToProps)(Home)
import React from 'react';
import { connect } from 'react-redux';
import * as homeActions from '../redux/actions/home';
import News from '../components/News'
import Top from '../components/Top'
import TabBar from '../components/TabBar'

function mapStateTpProps(state) {
    return { ...state.home };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchHome: (id) => dispatch(homeActions.fetchHome(id))
    }
}

class Home extends React.Component {
    state = {
        tabs: [
            { title: '24h快讯', index: 0 },
            { title: '科技新闻', index: 1 }
        ],
    }
    componentDidMount() {
        const { news, fetchHome } = this.props;
        news.length || fetchHome();
    }

    handlerReachBottom = (id) => {
        this.props.fetchHome(id);
    }

    render() {
        const { loaded, news } = this.props;
        return (
            <div>
                <Top/>
                <TabBar tabs={ this.state.tabs }>
                    <News loaded={ loaded } data={ news } onReachBottom={ this.handlerReachBottom }/>
                    <News loaded={ loaded } data={ news } onReachBottom={ this.handlerReachBottom }/>
                </TabBar>
            </div>
        )
    }
}

export default connect(mapStateTpProps, mapDispatchToProps)(Home)
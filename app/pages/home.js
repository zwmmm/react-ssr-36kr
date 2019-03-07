import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as homeActions from '../redux/actions/home';
import Page from '../components/Page'

function mapStateTpProps(state) {
    return { ...state.home };
}

function mapDispathToProps(dispatch) {
    return {
        fetchHome: () => dispatch(homeActions.fetchHome())
    }
}

class Home extends React.Component {
    componentDidMount() {
        // this.props.fetchHome();
    }

    render() {
        const { loaded, music } = this.props;
        return (
            <Page loaded={loaded}>
                <Link to="/list">跳转list</Link>
                <ul>
                    { music.map(item => <li key={ item.id }>{ item.title }</li>) }
                </ul>
            </Page>
        )
    }
}

export default connect(mapStateTpProps, mapDispathToProps)(Home)
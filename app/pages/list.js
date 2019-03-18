import React from 'react';
import { connect } from 'react-redux'
import * as listActions from '../redux/actions/list'

function mapStateToProps(state) {
    return { ...state.list };
}

function mapDispatchToProps(dispath) {
    return {
        fetchList: () => dispath(listActions.fetchList())
    }
}

class List extends React.Component {
    constructor() {
        super();
    }

    async componentDidMount() {
        const { data, fetchList } = this.props;
        data.length || fetchList();
    }

    render() {
        return <ul>{this.props.data.map(item => <li key={item.id}>{item.name}</li>)}</ul>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
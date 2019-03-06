import React from 'react';
import fetch from '../../fetch/index';

export default class List extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [],
        }
    }

    async componentDidMount() {
        const res = await fetch('/api/list');
        const list = await res.json();
        this.setState({data: list});
    }

    render() {
        return <ul>{this.state.data.map(item => <li key={item.id}>{item.name}</li>)}</ul>
    }
}
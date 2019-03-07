import React from 'react';
import { list } from '../api/music'

export default class List extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [],
        }
    }

    async componentDidMount() {
        const res = await list();
        this.setState({data: res});
    }

    render() {
        return <ul>{this.state.data.map(item => <li key={item.id}>{item.name}</li>)}</ul>
    }
}
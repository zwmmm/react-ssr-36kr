import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import * as detailActions from '../redux/actions/detail';
import Loading from '../components/Loading';

function mapStateToProps(state) {
    return { ...state.detail };
}

function mapDispatchToProps(dispath) {
    return {
        fetchDetail: (id) => dispath(detailActions.fetchDetail(id)),
        reset: () => dispath(detailActions.reset())
    }
}

class Detail extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        const { ssr, fetchDetail, match } = this.props;
        if (!ssr) {
            fetchDetail(match.params.id);
        }
    }

    componentWillUnmount() {
        this.props.reset();
    }

    render() {
        const data = this.props.data;
        const page = this.props.loaded
            ? <Loading/>
            : (
                <div className="detail">
                    <h1 className="title">{ data.title }</h1>
                    <section className="summary">{ data.summary }</section>
                    <section className="content" dangerouslySetInnerHTML={ { __html: data.content } }/>
                </div>
            )
        return <Fragment>{ page }</Fragment>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
import React from 'react';
import { Link } from 'react-router-dom';
import getTitles from './titles-get';

export default class Details extends React.Component {

    constructor() {
        super();
        this.state = {
            title: {}
        };
    }

    componentDidMount() {
        let titleId = this.props.match.params.titleId;
        let title = getTitles()
            .find((title) => title.id === titleId);
        this.setState({ title });
    }

    render() {
        return (
            <div>
                <h1>{this.state.title.name}</h1>
                <Link to='/' >Back to homepage</Link>
            </div >
        );
    }
}


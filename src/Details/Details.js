import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import getTitles from '../titles-get';
import './Details.css';

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
        if (this.state.title === undefined) {
            return <Redirect to='/not-found' />;
        } else {
            return (
                <div className='Details'>
                    <h1>{this.state.title.name}</h1>
                    <div className='container is-small'>
                        <div className='column'>
                            <img
                                src={this.state.title.img}
                                alt={this.state.title.name} />
                        </div>
                        <div className='column'>
                            {this.state.title.details}
                        </div>
                    </div>
                    <Link to='/' >Back to homepage</Link>
                </div >
            );
        }
    }
}
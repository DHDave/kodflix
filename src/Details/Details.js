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
<<<<<<< HEAD
                    <div className='container is-small'>
                        <div className='column'>
                            <img
                                src={this.state.title.img}
                                alt={this.state.title.name} />
                        </div>
                        <div className='column'>
                            {this.state.title.details}
                        </div>
=======
                    <div className='container'>
                        <div className='text'>
                            {this.state.title.details}
                        </div>
                        <img
                            className='image'
                            src={this.state.title.img}
                            alt={this.state.title.name} />
>>>>>>> 4bce1e498fafb3ff63bcfc1cf8feb533b348cbed
                    </div>
                    <Link to='/' >Back to homepage</Link>
                </div >
            );
        }
    }
}
import React from 'react';
import { Link, Redirect } from 'react-router-dom';
// import getTitles from '../GetTitles/titles-get';
import './Details.css';

export default class Details extends React.Component {

    constructor() {
        super();
        this.state = {
            message: 'Manflix original...',
	            show: {}
        }
    }
    componentDidMount() {
        setTimeout(() => { this.changeMessage() }, 3000);
        // let titleId = this.props.match.params.titleId;
        // let title = getTitles()
        //     .find((title) => title.id === titleId);
        // this.setState({ title });

        fetch('/rest/shows')
            .then(response => response.json())
            .then(titles => {
                let titleId = this.props.match.params.titleId;
                let show = titles.find(title => title.id === titleId);
                this.setState({ show });
            });
    }

    changeMessage() {
        this.setState({
            message: 'Coming soon ...',
            });
	    }
    render() {
        let show = this.state.show;
        let message = this.state.message;
        if (show) {
            return show.id ?
                <DetailsContent message={message} show={show} />
                :
                <div />;
        }
        else {
            return <Redirect to='/not-found' />;
        }
    }
}

function DetailsContent({ message, show}) {

return (
    <div className='Details'>
        <h1>{show.title}</h1>
        <div className='container is-small'>
            <div className='column'>
                <img
                   src={require(`../common/images/${show.id}.jpeg`)}
                   alt={show.title}
                />
                </div>
                <div className='column'>
                    {show.synopsis}
                </div> 
            </div>        
            <div className='details-left'>
                <h1 className='details-left details-message'>
                    {message}</h1> 
            </div> 
            <Link to={'/'}>
                <div className='home-button'>
                    Back to homepage
                </div>
            </Link>
        </div>
    );
}
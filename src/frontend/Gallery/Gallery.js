import React from 'react';
import Stack from '../Stack/Stack';


export default class Gallery extends React.Component {
        constructor() {
          super();
          this.state = { shows: [] };
        }
  componentDidMount() {
    fetch('/rest/shows')
      .then(response => response.json())
      .then(shows => this.setState({ shows }));
  }

  render() {

    return (
      <div>
        <div className='container'> {
              this.state.shows.map(show => { 
                return (
                  <Stack
                    key={show.id}
                    id={show.id}
                    title={show.title}
                  />
                )
              })
        }
        </div>
      </div>
    );
  }
}
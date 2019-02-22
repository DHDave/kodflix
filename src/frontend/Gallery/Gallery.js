import React from 'react';
import Stack from '../Stack/Stack';
import getTitles from '../GetTitles/titles-get';

export default class Gallery extends React.Component {

  componentDidMount() {
    fetch('/rest/shows')
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
      });
  }

  render() {

    return (
      <div>
        <div className='container'>
          {
            getTitles().map(stack => (
              <Stack
                key={stack.id}
                id={stack.id}
                name={stack.name}
                img={stack.img} />
                // src={stack.src} />
            ))
          }
        </div>
      </div>
    );
  }
}
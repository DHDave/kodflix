import React from 'react';
import Stack from '../Stack/Stack';
import { Redirect } from 'react-router-dom';
import Loading from '../common/loading/Loading';

export default class Gallery extends React.Component {
        constructor() {
          super();
          this.state = { shows: {} };
        }
  componentDidMount() {
    fetch('/rest/shows')
      .then(response => response.json())
      .then(shows => this.setState({ shows })
      );
  }

//   render() {
//     return ( 
//       this.state.shows.length ?
//         <div >
//           <div className='container'> {
//             this.state.shows.map(show => { 
//               return (
//                 <Stack
//                   key={show.id}
//                   id={show.id}
//                   title={show.title}
//                 />
//               );
//             }) 
//           }
//           </div>
//         </div>
//         :
//         <Loading />
//     );
//   }
// }

  render() {
    let show = this.state.shows;
    if (show) {
      return this.state.shows.length ?
        <div >
          <div className='container'> {
            this.state.shows.map(show => { 
              return (
                <Stack
                  key={show.id}
                  id={show.id}
                  title={show.title}
                />
              );
            }) 
          }
          </div>
        </div>
        :
        <Loading />
    } 
    else {
      return <Redirect to='/not-found' />;
    }
  }
}
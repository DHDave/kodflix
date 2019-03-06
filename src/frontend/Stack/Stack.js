import React from 'react';
import { Link } from 'react-router-dom';

export default class Stack extends React.Component {

  render() {
    let { id, title } = this.props;
    return (
      <Link to={`/${id}`} className='item'>
        <img
          src={require(`../common/images/${id}.jpeg`)}
          alt={title}
        />
        <div className='overlay'><h3>{title}</h3>

          {/* <img src={props.img} alt={props.name} />
        <div className='overlay'>
          <h3>{props.name}</h3> */}
        </div>
      </Link >
    );
  }
}
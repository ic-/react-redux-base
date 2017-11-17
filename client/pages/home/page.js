import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import style from './home.scss';

export class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(333)
    return (
      <div>home</div>
    )
  }
}


export default Home

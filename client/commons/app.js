import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Header from './components/Header'
import Footer from './components/Footer';

export class App extends Component {

  // React 16 新增方法，用来处理错误边界，可以捕获整个子组件树内发生的任何异常
  componentDidCatch(error, errorInfo) {
    // 可以打印异常，或者往后端日志中发送异常，方便定位跟踪
    console.info(error);
    console.error(errorInfo);
  }

  render(){
    return (
      <div className="main">
        <Header />
        {
          this.props.children
        }
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {

  };
}

export default connect(mapStateToProps)(App);

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import classNames from 'classnames';
import {getFilmList} from '../../action';
import {setCache} from '../../../../../common/action/caches';
import FilmList from '../FilmList';

class Film extends Component {


  // CSSTransition 当 in 为 true，触发动画样式 example-enter CSS class and the example-enter-active CSS class
  // 当 in 为 false，触发动画样式 example-exit CSS class and the example-exit-active CSS class
  // 对于多个组件需要动画时，需要使用 TransitionGroup ，然后 children 中 用 CSSTransition 或 Transition包裹
  render() {
    /**
     * react 动画结合 css Module，解决的方法有两种，利用 :global 设置全局 css
     * 指定 transitionName 为 对象 Object prop。详见
     * https://github.com/css-modules/css-modules/issues/84
     */
    return (
      <div>
       11111111
      </div>
    );
  }
}

export default Film;

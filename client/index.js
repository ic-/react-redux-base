import React, {Component} from 'react';
import {render} from 'react-dom'

import './style.css'

class App extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return <div>3333</div>
  }
}


render(
  <App />,
  document.getElementById('root')
)

// webapck-dev-middleware
if (module.hot) {
  module.hot.accept();
 }

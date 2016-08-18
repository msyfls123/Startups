document.write("<div id='app'></div><div id='root'></div>")
require("./css/index.scss")
var dataHtml = require("./html/app.html")
document.getElementById('app').innerHTML = dataHtml

import { store } from "./store/store.js"
import { addTodo,completeTodo,setVisibilityFilter,VisibilityFilters} from "./action/actions"
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory, Link } from 'react-router';
import { Provider } from 'react-redux'
import App from "./components/App"
import View from "./components/View"
import About from "./components/About"
import Repos from "./components/Repos"


let rootElement = document.getElementById('root')
render(
  <Provider store={store}>
  <Router history={hashHistory}>
   <Route component={View}>
    <Route path="/" component={App}/>
    <Route path="/repos(/:name)" component={Repos}/>
    <Route path="/about" component={About}/>
    </Route>
  </Router>
  </Provider>,
  rootElement
)

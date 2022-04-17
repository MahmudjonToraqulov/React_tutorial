import React from 'react'
import { BrowserRouter as Router , Route ,  Switch } from 'react-router-dom'
import Home from './home'
import About from './about'
import Contact from './contact'
import Error from './error'


function ReactRouter() {
  return ( 
        <Router>
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route path='/about'>
                    <About />
                </Route>
                <Route path='/contact'>
                    <Contact />
                </Route>
                <Route path='*'>
                    <Error />
                </Route>
            </Switch>
        </Router> 
  )
}

export default ReactRouter
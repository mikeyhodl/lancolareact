import React from 'react'
import {BrowserRouter as router, Switch, Route} from 'react-router-dom'
import Home from './Home'
import About from './About'

export default function RouterPage() {
  return (
    <div>
        <router>
            <switch>
                <Router path="/" exact component={Home} />
                <Route path="/about" exact component={About} />
            </switch>
        </router>
    </div>
  )
}

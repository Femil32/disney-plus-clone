import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import './App.css'
import Detail from './components/Detail'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './components/Login'
import NotFound from './components/NotFound'

function App() {
    return (
        <div className='App'>
            <Router>
                <Header />
                <Switch>
                    <Route path='/detail'>
                        <Detail />
                    </Route>
                    <Route path='/login'>
                        <Login />
                    </Route>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                    <Route path='*'>
                        <NotFound />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App

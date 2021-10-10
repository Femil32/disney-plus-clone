import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import './App.css'
import Detail from './components/Detail'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Login from './components/Login'
import NotFound from './components/NotFound'
import ProductionPage from './components/ProductionPage'

const productionRoute = ['search', 'watchlist', 'original', 'movie', 'series']

function App() {
    return (
        <div className='App'>
            <Router>
                <Header />
                <Switch>
                    <Route path='/detail/:id'>
                        <Detail />
                    </Route>
                    <Route path='/login'>
                        <Login />
                    </Route>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                    <Route exact path='/underproduction'>
                        <ProductionPage />
                    </Route>
                    {productionRoute.map(route => (
                        <Route path={route}>
                            <Redirect to='/underproduction' />
                        </Route>
                    ))}

                    <Route path='*'>
                        <NotFound />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App

import React, { useEffect, useState } from 'react';
import './App.css';
import Sidebar from './Sidebar'
import Chat from './Chat'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import Login from './Login'
import { useDataLayerValue } from './DataLayer'


function App() {
  const [{ user }, dispatch] = useDataLayerValue()

  return (
    <div className="app">
      {!user ? (
        <Login />
      ):(
        <section className="app-body">
          <Router>
            <Sidebar />
            <Switch>
              <Route path='/rooms/:roomid'>
                <Chat />
              </Route>
              <Route path='/'>
                <h1>Welcome</h1>
                 <Chat />
              </Route>

            </Switch>
          </Router>
        </section>
      )}
    </div>
  );
}

export default App;

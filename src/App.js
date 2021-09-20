import React, {useState, useEffect} from 'react'
import logo from './brudda.jpg'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"

function App() {
  const initial = ['Brudda, ', 'you do now da way?']
  const [uganda, setUganda] = useState(initial)
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>)

    function Home() {
      return (
        <div>
      <div><img src={logo} /></div>
      {uganda}
      <button onClick={()=>setUganda("Alright my brudda! we win!")}>YES</button>
    </div>     
      )
    }
    
    function About() {
      const [countBrudda, setCountBrudda] = useState(0)
      useEffect(()=>{
        document.title = `You added ${countBrudda} bruddas`
      })
      return (
      <>
        <h2>About</h2>

      {countBrudda}
        <button onClick={() => setCountBrudda(countBrudda + 1)}>Add bruddda!</button>
      </>
        )
    }

    function Users() {
      return <h2>Users</h2>
    }
  
}

export default App;

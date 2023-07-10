// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import React from 'react'
import ReactDOM  from "react-dom"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useEffect, useState } from "react"

const App = () => {
  return(
    <Router>
      <Routes>
        <Route exact path="/" element={<Greetings/>}/>
      </Routes>
    </Router>
  )
}

const Greetings = () => {
  const [greeting, setGreeting] = useState('')

  useEffect(()=> {
    fetch('api/messages', {
      headers: {
        'content-type': 'application/json'
      }
    }).then((res)=> {
      if(!res.ok) throw Error('data could not be retrieved')
      return res.json()
    }).then((data)=> {
      const body = `${data.greetings}`
      setGreeting(body)
    })
  },[])

  return(
    <div>{greeting && <h2>{greeting}</h2>}</div>
  )
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
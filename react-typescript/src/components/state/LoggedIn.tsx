import React from 'react'
import { useState } from 'react'
const LoggedIn = () => {

    const [isLoggedIn, setIsloggedIn] = useState(false)

    const handleLogin = () => { 
        setIsloggedIn(true)
    }
    const handleLogout = () => {
        setIsloggedIn(false)
    }
  return (
    <div>
          <button onClick={handleLogin}>Login</button>
          <button onClick={handleLogout}>Logout</button>
          <button>User is {isLoggedIn ? "logged in" : "logged out"} </button>
    </div>
  )
}

export default LoggedIn

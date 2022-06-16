import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import UserContext from './UserContext'
import Home from './Home'
import Welcome from './Welcome'
import SignInForm from './SignInForm'

function App() {
  let [user, setUser] = useState({
    name: "",
    signIn: signIn,
    signOut: signOut
  })

  function signIn(userName) {
    setUser((user) => ({
      ...user,
      name: userName
    }))
  }
  function signOut() {
    setUser((user) => ({
      ...user,
      name: ""
    }))
  }

  return (
    <UserContext.Provider value={user}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Welcome />} />
            <Route path="sign-in" element={<SignInForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  )
}

export default App


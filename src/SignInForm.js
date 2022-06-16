import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import UserContext from './UserContext'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function SignInForm() {
 let {name, signIn, signOut} = useContext(UserContext)
 let navigate = useNavigate()

  let [credentials, setCredentials] = useState({
    username: '',
    password: '',
  })

  function handleChange(event) {
   setCredentials({ ...credentials, [event.target.name]: event.target.value });
 }

 function handleSubmit(event) {
  event.preventDefault()
  signIn(credentials.username)
  navigate("/")
}

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          name="username"
          value={credentials.username}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
        />
      </Form.Group>
      <Button type="submit">Sign In</Button>
    </Form>
  )
}

export default SignInForm


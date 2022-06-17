import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'
import { Link, Outlet } from 'react-router-dom'
import UserContext from './UserContext'
import { useContext } from 'react'
import './Home.css'

function Home() {
  let { name, signIn, signOut } = useContext(UserContext)
  function authLink() {

    if (name) {
      return (
        <span className="container">
          Signed in as: {name}
          <Link to="/" className="link" onClick={signOut}>
            Sign Out
          </Link>
        </span>
      )
    }
    return (
      <Link to="sign-in" className="nav-link">
        Sign In
      </Link>
    )
  }

  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Nav className="me-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </Nav>
          <Navbar.Text>{authLink()}</Navbar.Text>
        </Container>
      </Navbar>
      <Stack gap={3} className="col-md-10 mx-auto">
        <Outlet />
      </Stack>
    </>
  )
}

export default Home

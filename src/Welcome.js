import UserContext from './UserContext'
import { useContext } from 'react'

function Welcome() {
  let { name, signIn, signOut } = useContext(UserContext)
  if (name)
    return (
      <>
        <h1>Welcome</h1>
        <p>Hello {name}! Thanks for visiting our website!</p>
      </>
    )

  return (
    <>
      <h1>Welcome</h1>
      <p>Hello! Thanks for visiting our website!</p>
    </>
  )
}

export default Welcome

import UserCard from "./components/UserCard"
import './App.css'
import a from './assets/a.jpg'
import b from './assets/b.jpg'
import c from './assets/c.jpg'

function App() {


  return (
    <>
      <div className="container">
        <UserCard name="John Doe" image={a}  />
        <UserCard name="Jane Smith" image={b}  />
        <UserCard name="Bob Johnson" image={c}  />
      </div>


    </>
  )
}

export default App

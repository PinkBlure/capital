import { useState } from 'react'
import './App.css'

// importar los modulos de firebase
import appFirebase from '../src/credentials'
import {getAuth,onAuthStateChanged} from 'firebase/auth'
const auth = getAuth(appFirebase)

// importar componentes
import Login from './components/Login/Login'
import Home from '../src/components/Home'

function App() {

  const [user, setUser] = useState(null)

  onAuthStateChanged(auth, (userFirebase) => {
    if (userFirebase) {
      setUser(userFirebase)
    } else {
      setUser(null)
    }
  })

  return (
    <div>
      {user? <Home email={user.email} /> : <Login />} 
    </div>
  )
}

export default App

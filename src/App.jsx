import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import HomePage from './pages/HomePage'
import { login, logout, selectUser } from './feature/userSlice'
import Header from './components/Header'
import Login from './pages/Login'
import { useEffect } from 'react'
import { auth } from './firebase'

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        // User is Logged In
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoURL: userAuth.photoURL,
        }))
      } else {
        // User is Logged Out
        dispatch(logout())
      }
    })
  }, [])

  return (
    <div className='app'>
      <Header />

      {!user ? <Login /> : <HomePage />}


    </div>
  )
}

export default App

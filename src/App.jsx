import { useSelector } from 'react-redux'
import './App.css'
import HomePage from './pages/HomePage'
import { selectUser } from './feature/userSlice'
import Header from './components/Header'
import Login from './pages/Login'

function App() {
  const user = useSelector(selectUser)
  return (
    <div className='app'>
      <Header />

      {!user ? <Login /> : <HomePage />}


    </div>
  )
}

export default App

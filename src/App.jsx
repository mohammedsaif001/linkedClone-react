import './App.css'
import Feed from './components/Feed'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Widgets from './components/Widgets'

function App() {

  return (
    <div className='app'>
      {/* Header */}
      <Header />
      {/* App Body */}
      <div className="app__body">
        <Sidebar />
        <Feed />
        {/* Widgets */}
        <Widgets />
      </div>
    </div>
  )
}

export default App

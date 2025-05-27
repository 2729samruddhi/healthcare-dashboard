import { useState } from 'react'
import './App.css'
import Header from './components/Header'
 import Sidebar from './components/Sidebar'
import DashboardMainContent from './components/Dashboard/DashboardMainContent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <Header/>
      <div className="app-body">
        <Sidebar/>
        <DashboardMainContent/>
      </div>
    </div>
  )
}

export default App

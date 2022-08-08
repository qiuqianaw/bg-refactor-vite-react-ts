import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import DashBoard from './pages/DashBoard'
import Games from './pages/Games'

import Layout from './Layout/PageLayout'
import Topics from './pages/Topics'
import AddGame from './pages/AddGame'
import AddTopic from './pages/AddTopic'
import Debaters from './pages/Debaters'
import FeedBack from './pages/FeedBack'
import OpenSource from './pages/OpenSource'
import UpdateNote from './pages/UpdateNote'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<DashBoard />} />
            <Route path="/topics" element={<Topics />} />
            <Route path="/games" element={<Games />} />
            <Route path="/addgame" element={<AddGame />} />
            <Route path="/addtopic" element={<AddTopic />} />
            <Route path="/debaters" element={<Debaters />} />
            <Route path="/feedback" element={<FeedBack />} />
            <Route path="/opensource" element={<OpenSource />} />
            <Route path="/updatenote" element={<UpdateNote />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App

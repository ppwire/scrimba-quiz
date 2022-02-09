import './App.css'
import StartPage from './components/StartPage'
import { Routes, Route, Link } from "react-router-dom";

function App() {

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<StartPage></StartPage>}></Route>
      </Routes>
    </div>
  )
}

export default App

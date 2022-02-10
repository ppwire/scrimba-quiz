import './App.css'
import StartPage from './components/StartPage'
import Quiz from './components/Quiz'
import { Routes, Route, Link } from "react-router-dom";

function App() {

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<StartPage></StartPage>}></Route>
        <Route path="/quiz" element={<Quiz></Quiz>}></Route>
      </Routes>
    </div>
  )
}

export default App

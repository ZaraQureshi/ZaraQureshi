
import { Routes, Route } from 'react-router-dom'
import './App.css'
import './global.css'
import Card from './components/Card'
import { Projects } from './components/Projects'
import { Experience } from './components/Experience'
// import Portfolio from './components/Portfolio'

function App() {

  return (
    <>
    {/* <Portfolio/> */}
      <Routes>
      <Route path='/' element={ <Card/>}/>
      <Route path='/experience' element={<Experience/>}/>
      <Route path='/projects' element={<Projects/>}/>
    </Routes>
     

      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App

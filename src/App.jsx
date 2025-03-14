
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Components/Counter'

function App() {

  return (
    <>
      <div>
        <a>
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a >
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Laboratorio II</h1>
    
        
       <Counter/>

    
      
    </>
  )
}

export default App

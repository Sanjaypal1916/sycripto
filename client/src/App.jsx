import './App.css'
import Foter from './Components.jsx/Foter'
import Navbar from './Components.jsx/Navbar'
import Service from './Components.jsx/Service'
import Transaction from './Components.jsx/Transaction'
import Welcome from './Components.jsx/Welcome'

function App() {

  return (<>
  
    <div className='min-h-screen'>
      <div className='gradient-bg-welcome'>
      <Navbar/>
      <Welcome/>
      <Service/>
      <Transaction/>
      <Foter/>
      </div>
    </div>
  </>
  )
}

export default App

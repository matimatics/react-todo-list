import './App.css'
import { ListComponent } from './components/ListComponent'

function App() {

  return (
    <div className="app">
      <div className="to-do-app">
        <div className="to-do-app-main">
          <h1 className="main-title">To do List</h1>
          <ListComponent />
        </div>
      </div>
    </div>
  )
}

export default App

import './App.css'
import data from "./utils/data"

function App() {

  return (
    <main>
      <div>
        <h1>{ data.title }</h1>
        <h2>{ data.subtitle }</h2>
      </div>
    </main>
  )
}

export default App

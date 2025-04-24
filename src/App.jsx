import './App.css'
import Link from './components/Link'
import data from "./utils/data"

function App() {

  return (
    <main>
      <div>
        <h1>{data.title}</h1>
        <h2>{data.subtitle}</h2>
      </div>

      <>
        {data.links.map((item) => (
          <Link text={item.text} url={item.url} />
        ))}
      </>

      <div className="description">
        <p>{data.desciption}</p>
      </div>
    </main>
  )
}

export default App

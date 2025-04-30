import './App.css'
import Link from './components/Link'
import data from "./utils/data"
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {

  return (
    <main>

      <div className="banner">
        <img src="../banner.jpeg" alt="" />
      </div>

      <div className='about'>
        <img src="../avatar.jpg" alt="avatar" className='avatar' />
        <h1>{data.title}</h1>
        <h2>{data.subtitle}</h2>
      </div>

      <div className="links-list">
        {data.links.map((item) => (
          <Link
            text={item.text}
            url={item.url}
            icon={item.icon}
            image={item.image}
          />
        ))}
      </div>

      <div className="description">
        <p>{data.desciption}</p>
      </div>
    </main>
  )
}

export default App

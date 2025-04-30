import './App.css'
import Link from './components/Link'
import data from "./utils/data"
import 'bootstrap-icons/font/bootstrap-icons.css';
import banner from "../public/banner.jpeg"
import avatar from "../public/avatar.jpg"

function App() {

  return (
    <main>

      <div className="banner">
        <img src={banner} alt="" />
      </div>

      <div className='about'>
        <img src={avatar} className='avatar' />
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

import './App.css';
import {GiHamburgerMenu} from 'react-icons/gi';
import {AiOutlineClose} from 'react-icons/ai';
import {useState} from 'react';

function App() {
  const [active, setActive] = useState(false);
  return (
  <div className='navigation'>
      <div className="navigation__icon" onClick={() => setActive(true)}>
        <GiHamburgerMenu />
        <p>Get Started</p>
      </div>
      <div className={`navigation__menu ${active && "active"}`}>
        <div className="navigation__menu--icon" onClick={() => setActive(false)}>
          <AiOutlineClose />
        </div>
        <ul>
          <li>Home</li>
          <li>Services</li>
          <li>Projects</li>
          <li>About</li>
        </ul>
      </div>
  </div>
  );
}

export default App;

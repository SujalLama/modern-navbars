import './App.css';
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'
import {useState} from 'react';

function App() {
  const [active, setActive] = useState(false);
  return (
    <div className='app' >
      <div className="navigation">
        <h1 className='logo'>DevUp</h1>
        <div className="nav-bar">
          <div className={`navigation__menu ${active && 'active'}`}>
            <ul>
              <li>
                <span>Home</span>
              </li>
              <li>
                <span>Services</span>
              </li>
              <li className='project'>
                <span>Projects</span>
                <ul className="dropdown-project">
                  <li>Frontend Projects</li>
                  <li>Backend Projects</li>
                  <li>Mobile Projects</li>
                  <li>Web Projects</li>
                </ul>
              </li>
              <li>
                <span>About</span>
              </li>
            </ul>
            <div className="menu-title">Menu</div>
          </div>
          <div 
            className={`nav-icon ${active && 'active'}`}
            onClick={()=> setActive(!active)}
            >
            <div className="ham">
              <GiHamburgerMenu />
            </div>
            <div className="close">
              <AiOutlineClose />
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <h1>Hello developers</h1>
      </div>
    </div>
  );
}



export default App;

import './App.css';
import {useState} from 'react';
function App() {
  const [active, setActive] = useState(false);
  return (
    <div className="navigation">
      <div className={`nav-icon ${active && "active"}`} onClick={() => setActive(!active)}>
        <div className="line-wrapper">
          <div className="line line-1"></div>
          <div className="line line-2"></div>
        </div>
      </div>
      <div className={`navigation__menu ${active && 'active'}`}>
        <ul>
          <li>
            <span>Home</span>
            <div className="nav-underline"></div>
          </li>
          <li>
            <span>Services</span>
            <div className="nav-underline"></div>
          </li>
          <li>
            <span>Projects</span>
            <div className="nav-underline"></div>
          </li>
          <li>
            <span>About</span>
            <div className="nav-underline"></div>
          </li>
        </ul>
      </div>
    </div>
  );
}



export default App;

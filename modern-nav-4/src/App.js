import './App.css';
import {useState} from 'react';

function App() {
  const [active, setActive] = useState(false);
  const [mouseX, setMouseX] = useState(-1000);
  const [mouseY, setMouseY] = useState(-1000);
  const [imgClass, setImgClass] = useState('');

  const mouseOver = (e) => {
    setImgClass(e.target.id)
    setMouseX(e.clientX);
    setMouseY(e.clientY);
  }

  const mouseOut = () => {
    setImgClass('');
    setMouseX(-1000);
    setMouseY(-1000);
  }

  return (<div className='app' >
    <h1 style={{position: 'fixed', fontSize: '100px', marginBottom: '24px'}}>Hello Developers</h1>
    <div className="navigation">
      <img 
    src={
      imgClass === 'home'
      ? '/abstract.jpg'
      : imgClass === 'service'
      ? '/abstract-1.jpg'
      : imgClass === 'project'
      ? '/abstract-2.jpg'
      : imgClass === 'about'
      ? '/abstract-3.jpg'
      : '/abstract.jpg'

    } 
    alt="cursor image" 
    style={{transform: `translate3d(${mouseX}px, ${mouseY}px, 0)`, 
    position: 'fixed',
    zIndex: '1000',
    opacity: .9,
    borderRadius: '20px',
    width: "200px",
    height: "200px",
    }}/>
      <div id="nav" className={`nav-icon ${active && "active"}`} onClick={() => setActive(!active)}>
        <div className="line-wrapper">
          <div className="line line-1"></div>
          <div className="line line-2"></div>
        </div>
      </div>
      <div className={`navigation__menu ${active && 'active'}`}>
        <ul>
            <li onMouseOver={mouseOver} onMouseLeave={mouseOut} id="home">
              <div id="home" className="number">
                <span id="home">01.</span>
                <div id="home" className="nav-underline"></div>
              </div>
              <span id="home">Home</span>
            </li>
          <li onMouseOver={mouseOver} onMouseLeave={mouseOut} id="service">
            <div className="number" id="service">
              <span id="service">02.</span>
              <div className="nav-underline" id="service"></div>
            </div>
            <span id="service">Services</span>
          </li>
          <li onMouseOver={mouseOver} onMouseLeave={mouseOut} id="project">
            <div className="number" id="project">
              <span id="project">03.</span>
              <div className="nav-underline" id="project"></div>
            </div>
            <span id="project">Projects</span>
          </li>
          <li onMouseOver={mouseOver} onMouseLeave={mouseOut} id="about">
            <div className="number" id="about">
              <span id="about">04.</span>
              <div className="nav-underline" id="about"></div>
            </div>
            <span id="about">About</span>
          </li>
        </ul>
      </div>
    </div>
    </div>
  );
}



export default App;

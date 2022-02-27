import './App.css';
import {useState} from 'react';

function App() {
  const [activePage, setActivePage] = useState('home');
  return (
    <div className="app">
      <div className={`home page ${activePage === 'home' && 'active'}`}>
        <div className="page-content">
          <h1>Home page</h1>
        </div>
      </div>
      <div className={`service page ${activePage === 'service' && 'active'}`} 
        onClick={() => setActivePage('service')}>
        <div className="page-content">
          <h1>Service page</h1>
        </div>
        <div className="nav-label">Service</div>
      </div>
      <div className={`project page ${activePage === 'project' && 'active'}`} 
        onClick={() => setActivePage('project')}>
        <div className="page-content">
          <h1>Project page</h1>
        </div>
        <div className="nav-label">Project</div>
      </div>
      <div className={`about page ${activePage === 'about' && 'active'}`} 
        onClick={() => setActivePage('about')}>
        <div className="page-content">
          <h1>About page</h1>
        </div>
        <div className="nav-label">About</div>
      </div>
      <button className='back' onClick={() => setActivePage('home')}>Home</button>
    </div>
  );
}



export default App;

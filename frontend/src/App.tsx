import './App.scss';
import Posts from './pages/Posts';
import User from './pages/User';
import Users from './pages/Users';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function AppRouter() {
   return (
      <Router>
       <div>
        <nav className='nav-bar'>
          <button className = "hamburger-container" id="nav-bar-button" >
            <FontAwesomeIcon icon={faBars}/>
          </button>

          <div className='links-container'>
          <ul>
            <li>
              <Link to="/Posts">Posts</Link>
             </li>
             <li>
              <Link to="/Users">Users</Link>
            </li>
             <li>
              <Link to="2">Profile</Link>
            </li>
          </ul>
          </div>
        </nav>
        <Routes>
            <Route path="/Posts"  element={<Posts/>} />
            <Route path="/Users"  element={<Users/>} />
            <Route path=":userId"  element={<User/>} />
        </Routes>
         
       </div>
    </Router>
     );
   }



export default AppRouter;
// export default App

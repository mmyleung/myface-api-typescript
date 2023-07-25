import './App.css';
import Posts from './pages/Posts';
import User from './pages/User';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";


function AppRouter() {
   return (
      <Router>
       <div>
        <nav>
          <ul>
            <li>
              <Link to="/Posts">Posts</Link>
             </li>
             <li>
              <Link to="2">Profile</Link>
            </li>
          </ul>
        </nav>
        <Routes>
            <Route path="/Posts"  element={<Posts/>} />
            <Route path=":userId"  element={<User/>} />
        </Routes>
         
       </div>
    </Router>
     );
   }



export default AppRouter;
// export default App

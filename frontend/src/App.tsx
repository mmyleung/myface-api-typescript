import './App.scss';
import Posts from './pages/Posts';
import User from './pages/User';
import Users from './pages/Users';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import CreateUser from './pages/CreateUser';


function AppRouter() {
   return (
      <Router>
        <Navbar/>
       <div>
        
        <Routes>
            <Route path="/posts"  element={<Posts/>} />
            <Route path="/users"  element={<Users/>} />
            <Route path="/users/:userId"  element={<User/>} />
            <Route path="/users/create"  element={<CreateUser/>} />
        </Routes>
         
       </div>
    </Router>
     );
   }



export default AppRouter;
// export default App

import { UserModel } from "../models/userModel";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

export default function Pagination(){

    const [users, setUsers] = useState<UserModel>();

    useEffect(() => {
      fetch("http://localhost:3001/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
    }, [])
    

    return (
        
        <Router>
         <div>
          <nav>
            <ul>
              <li>
                <Link to={users.next}>Posts</Link>
               </li>
               <li>
               <Link to={users.previous}>Posts</Link>
              </li>
            </ul>
          </nav>
          <Routes>
              <Route path="/Users"  element={<Posts/>} />
              <Route path="/Users"  element={<Users/>} />
          </Routes>
           
         </div>
      </Router>

      
        
        
       );
     }
  
  
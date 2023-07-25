import { Page } from "../models/page";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Routes, useParams, useLocation } from "react-router-dom";

interface PaginationProps <T> {
  apiPath: string,
  resultElement: (result:T) => JSX.Element
}

export default function Pagination<T>({apiPath, resultElement}:PaginationProps<T>){

    const location = useLocation();
    const [page, setPage] = useState<Page<T>>();

    useEffect(() => {
      console.log(location.search)
      fetch(`http://localhost:3001/${apiPath}${location.search}`)
      .then((response) => response.json())
      .then((data) => setPage(data));
    }, [location.search])
    

    return (
         <div>
          {page === undefined 
          ? <p>Loading</p>
          :
          <>
          {page.results.map(result => resultElement(result))}
          <nav>
            {page.next && <Link to={page.next}>Next</Link>}
            {page.previous && <Link to={page.previous}>Previous</Link>}
          </nav>  
          </>        
          }
         </div>
       );
     }
  
  
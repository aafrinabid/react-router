import React from 'react'
import { Link } from 'react-router-dom'

function MainHeader() {
  return (
   <header>
       <nav>
           <ul>
               <li>
                   <Link to='/Welcome'>Welcome</Link>
               </li>
               
               <li>
                   <Link to='/products'>Products</Link>
               </li>
           </ul>
       </nav>
   </header>

    )
}

export default MainHeader
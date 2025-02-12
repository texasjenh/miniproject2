import React from 'react'
import './navbar.css'

function Navbar() {
    return (
        <div className="navbar">
            <ul>
                <li className="li"><a className="a" href='./HomePage.jsx'>Home</a></li>
            </ul>  

            <ul>
                <li className="li"><a className="a" href='./AllBooks.jsx'>All Books</a></li>
            </ul>                       
      
            <ul>
                <li className="li"><a className="a" href='./AboutUs.jsx'>Connect</a></li>
            </ul> 
        </div>  
    )
}
  export default Navbar
  
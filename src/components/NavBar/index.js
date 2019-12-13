import React from 'react'
import { NavLink } from 'react-router-dom'
import * as ROUTES from '../../constants/routes'
import { NavBar } from 'react-bootstrap'
import { doLogOut } from '../../firebase/firebase'


const NavBars = () => {
    
    return (
       
        <div>
           <nav class="navbar navbar-dark bg-dark">
           
                
            
            <NavLink to={ROUTES.HOME}className="yellow">HOME</NavLink><br></br>
            <NavLink to={ROUTES.LOGIN}className="yellow">LOGIN</NavLink>
            <NavLink to={ROUTES.SIGN_UP}className="yellow">SIGNUP</NavLink>
            <NavLink to={ROUTES.MUSIC}className="yellow">SEARCH MUSIC</NavLink>
            <button onClick={doLogOut}>Log out</button>
          
            </nav>
           
           
                
    </div>
     
    )
}


export default NavBars
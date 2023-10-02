import './nav.css'

import {Link, NavLink} from 'react-router-dom'

const Nav = () => {
    return(
        <div className="container">
            <div className="navBar">
                <Link to="#" className="logo">Logo</Link>
                <ul>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/blog">Blog</NavLink>
                </ul>
            </div>
        </div>
        
    )
}

export default Nav
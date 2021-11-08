import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <span className="navbar-brand mb-0 h1">Monitoring Software</span>
                <span className="navbar-brand mb-0 h1">
                <Link style={{'textDecoration':'none','marginRight':'10px' }} className="link" to="/" >Monitors</Link>
                <Link style={{'textDecoration':'none'}} className="link" to="/monitorings" >Monitorings</Link>
                </span>
            </nav>
        </div>
    )
}

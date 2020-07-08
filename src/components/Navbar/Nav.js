import React from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import './nav.css';
import '../../App.css';


class Navbar extends React.Component {
  render() {
  return (
    <div className="App">
        <header>
            <nav className="navbar">
                <h1 className="logo">SneakerHead</h1>
                    <div className="nav-container">
                        <ul>
                            <li>
                                <NavLink to="/" exact>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/Products">Products</NavLink>
                            </li>
                            <li>
                                <NavLink to="/Contact">Contact </NavLink>
                            </li>
                        </ul>
                    </div>
            </nav>
        </header>

    </div>
    );
    }
    }

export default Navbar;
import React from 'react'
import {NavLink, Link} from 'react-router-dom';
import { actionCreaters } from '../state/index';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';

export default function Navbar() {
    const dispatch = useDispatch();
    const actions = bindActionCreators(actionCreaters, dispatch)
    const user = useSelector(state => state.user)
    console.log(user)

  const logout = () => {
    actions.logout(user)
  }

  return (
    <div>
        <header className="l-header" id="header">
            <nav className="nav bd-container">
                {user.loggedin === true ?
                    <a href="/" className="nav__logo"><b><i>Welcome {user.userName}</i></b></a>:
                    <a href="/" className="nav__logo"><b><i>RailMan</i></b></a>}

                <div className="nav__menu" id="nav-menu">
                    <ul className="nav__list">

                        <li className="nav__item"><Link to="/" className="nav__link">Home</Link></li>
                        {user.loggedin === false ?
                            <li className="nav__item"><Link to="/Login" className="nav__link">Login</Link></li>:
                            <li className="nav__item"><Link to="/Login" onClick={()=>logout()} className="nav__link">Logout</Link></li>}
                        <li className="nav__item"><Link to="/Signup" className="nav__link">Signup</Link></li>
                        <li className="nav__item"><Link to="/About" className="nav__link">About</Link></li>
                        <li className="nav__item"><Link to="/Services" className="nav__link">Services</Link></li>
                        <li className="nav__item"><Link to="/Menu" className="nav__link">Menu</Link></li>
                        <li className="nav__item"><Link to="/Order" className="nav__link">Order</Link></li>
                        <li className="nav__item"><Link to="/Contact" className="nav__link">Contact</Link></li>

                        <li><i className='bx bx-moon change-theme' id="theme-button"></i></li>
                    </ul>
                </div>

                <div className="nav__toggle" id="nav-toggle">
                    <i className='bx bx-menu'></i>
                </div>
            </nav>
        </header>
    </div>
  );
}

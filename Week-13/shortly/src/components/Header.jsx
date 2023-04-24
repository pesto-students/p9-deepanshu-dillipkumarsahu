import React from 'react';
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Header = () => {
    const { user, logOut } = UserAuth();

    const handleSignOut = async () => {
        try {
            await logOut()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <nav>
            <div class="container">
                <div class="logo">
                    <a href="#">
                        <h3>SHORTLY</h3>
                    </a>
                </div>
                <div class="menu">
                    <ul>
                        {/* <li><Link to="#">Home</Link></li>
                        <li><Link to="#">About Us</Link></li> */}
                        <li>
                            {user ? <Link to="#" onClick={handleSignOut}>Sign Out</Link> : <Link to="/signin">Sign In</Link>}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}
export default Header;
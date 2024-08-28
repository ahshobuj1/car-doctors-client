import {Link, NavLink} from 'react-router-dom';
import logo from '../../../assets/icons/logo.svg';
import {useContext} from 'react';
import {AuthContext} from '../../../context/UserContext';
import Swal from 'sweetalert2';

const Navbar = () => {
    const {user, logOutUser} = useContext(AuthContext);

    const handleLogOut = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You want to log out!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, LogOut it!',
        }).then((result) => {
            if (result.isConfirmed) {
                logOutUser()
                    .then(() => {
                        Swal.fire({
                            title: 'Logged Out!',
                            text: 'Your account has been logged out.',
                            icon: 'success',
                        });
                    })
                    .catch((err) => console.log(err.message));
            }
        });
    };

    const navItems = (
        <>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/about">About</NavLink>
            </li>
            <li>
                <NavLink to="/services">Services</NavLink>
            </li>
            <li>
                <NavLink to="/blog">Blog</NavLink>
            </li>
            {user && (
                <li>
                    <NavLink to="/booking">My Booking</NavLink>
                </li>
            )}

            {user ? (
                <>
                    <button
                        onClick={handleLogOut}
                        className="btn btn-accent mr-3 btn-sm">
                        LogOut
                    </button>
                    <span className="text-xs md:text-sm pr-1 md:flex items-center">
                        {user.email}
                    </span>
                </>
            ) : (
                <Link to="/signin">
                    <button className="btn btn-accent mr-3 btn-sm">
                        Login
                    </button>
                </Link>
            )}
        </>
    );

    return (
        <div className="navbar bg-base-100 h-24 items-center mb-12">
            <div className="navbar-start">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navItems}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-xl">
                    <img src={logo} alt="logo" className="w-20" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">{navItems}</ul>
            </div>
            <div className="navbar-end">
                <button className="btn btn-outline text-orange-600 border-orange-600">
                    Appointment
                </button>
            </div>
        </div>
    );
};

export default Navbar;

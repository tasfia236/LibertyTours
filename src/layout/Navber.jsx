import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
import { IoPersonOutline } from "react-icons/io5";
import { Tooltip } from "react-tooltip";

const Navber = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(() => console.log('logOut'))
            .catch(error => console.error(error))
    }

    const Navlinks1 = <>
        <li><Link className="hover:bg-sky-200 rounded-lg" to='/'>Home</Link></li>
        {/* <li><Link onClick={() => window.scrollTo({ top:600, behavior: "smooth" })}>Estate</Link></li>*/}
        <li><Link className="hover:bg-sky-200 rounded-lg" to='/allspots'>All Tourists Spot</Link></li>
        <li><Link className="hover:bg-sky-200 rounded-lg" to='/addspot'>Add Tourists Spot</Link></li>
        <li><Link className="hover:bg-sky-200 rounded-lg" to='/contact'>Contact</Link></li>
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm fixed z-[9999] dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {Navlinks1}
                        {user && <>
                            <li><Link>My List</Link></li>
                        </>
                        }
                    </ul>
                </div>
                <h1 className="btn btn-ghost text-3xl font-black text-sky-600">Liberty Tours</h1>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal -mr-16 px-1 font-bold">
                    {Navlinks1}
                    {user && <>
                        <li><Link>My List</Link></li>
                    </>
                    }
                </ul>
            </div>
            <div className="navbar-end gap-2">
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            user && <>

                                <li><a onClick={handleLogout} >Logout</a></li>
                                <li className=" pt-2">
                                    {user.email}
                                </li>
                            </>
                        }
                    </ul>
                </div>
                <div className="dropdown dropdown-end">
                    {
                        user && <>
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle z-[9999] avatar" data-tooltip-id="my-tooltip" data-tooltip-content={user.displayName} data-tooltip-place="right">
                                {user.photoURL ? <div className="w-10 rounded-full">
                                    <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
                                </div>
                                    : <div className="rounded-full pt-3 pl-3 w-10"><IoPersonOutline></IoPersonOutline></div>
                                }
                            </div>
                        </>
                    }
                    <ul tabIndex={0} className="lg:hidden menu menu-sm fixed dropdown-content mt-1 z-[9999] p-2 shadow bg-base-100 rounded-box w-52">
                        {user && <>
                            <li className="pl-3 font-bold text-lg">{user.displayName}</li>
                            <li className="pl-3">{user.email}</li>
                            <li><a onClick={handleLogout} >Logout</a></li>

                        </>
                        }
                    </ul>
                </div>
                <div className="flex gap-3">
                    {
                        !user && <>
                            <Link to='/login'>
                                <button className="btn">Sign In</button>
                            </Link>
                            <Link to='/register'>
                                <button className="btn bg-sky-300 font-bold">Sign Up</button>
                            </Link>
                        </>
                    }
                </div>
            </div>
            <Tooltip id="my-tooltip" />
        </div>

    );
};

export default Navber;
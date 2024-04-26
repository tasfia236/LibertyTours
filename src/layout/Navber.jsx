import { Link } from "react-router-dom";

const Navber = () => {

    const Navlinks1 = <>
        <li className="hover:bg-sky-200 rounded-lg {({isActive})=> isActive? ' bg-sky-200 rounded-lg font-bold ' : 'font-bold'}"><Link to='/'>Home</Link></li>
        {/* <li><Link onClick={() => window.scrollTo({ top:600, behavior: "smooth" })}>Estate</Link></li>*/}
        <li className="hover:bg-sky-200 rounded-lg {({isActive})=> isActive? ' bg-sky-200 rounded-lg font-bold ' : 'font-bold'}"><Link to='/allspots'>All Tourists Spot</Link></li> 
        <li className="hover:bg-sky-200 rounded-lg"><Link to='/addspot'>Add Tourists Spot</Link></li>
        <li className="hover:bg-sky-200 rounded-lg"><Link to='/contact'>Contact</Link></li>
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
                    </ul>
                </div>
                <h1 className="btn btn-ghost text-3xl font-black text-sky-600">Liberty Tours</h1>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal -mr-16 px-1 font-bold">
                    {Navlinks1}
                </ul>
            </div>
            <div className="navbar-end gap-2">
                <div className="navbar-center hidden lg:flex">
                    {/* <ul className="menu menu-horizontal px-1">
                        {
                            user && <>

                                <li>
                                    <Link to='/updateprofile' className="justify-between">
                                        Update Profile
                                    </Link>
                                </li>
                                <li><a onClick={handleLogout} >Logout</a></li>
                                <li className=" pt-2">
                                    {user.email}
                                </li>
                            </>
                        }
                    </ul> */}
                </div>
                <div className="dropdown dropdown-end">
                    {/* {
                        user && <>
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle z-[9999] pt-1 pl-1 avatar lg:tooltip lg:tooltip-bottom" data-tip={user.displayName}>
                                {user.photoURL ? <div className="w-10 rounded-full">
                                    <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
                                </div>
                                    : <div className="rounded-full pt-3 pl-3 w-10"><IoPersonOutline></IoPersonOutline></div>
                                }
                            </div>
                        </>
                    } */}
                    <ul tabIndex={0} className="lg:hidden menu menu-sm fixed dropdown-content mt-1 z-[9999] p-2 shadow bg-base-100 rounded-box w-52">
                        {/* {user && <>
                            <li className="pl-3 font-bold text-lg">{user.displayName}</li>
                            <li className="pl-3">{user.email}</li>
                            <li>
                                <Link to='/updateprofile'><a className="justify-between">
                                    Update Profile
                                </a></Link>
                            </li>
                            <li><a onClick={handleLogout} >Logout</a></li>

                        </>
                        } */}
                    </ul>
                </div>
                <div className="flex gap-3">
                    {/* {
                        !user && <> */}
                            <Link to='/login'>
                                <button className="btn">Sign In</button>
                            </Link>
                            <Link to='/register'>
                                <button className="btn">Sign Up</button>
                            </Link>
                        {/* </>

                    } */}
                </div>
            </div>
        </div>
    );
};

export default Navber;
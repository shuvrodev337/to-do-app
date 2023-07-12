import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const {
    user,
    loading,
    createUser,
    signIn,
    googleSignIn,
    passwordReset,
    logOut,
  } = useContext(AuthContext);

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error.message);
      });
  };

  const endNavItems = (
    
        
          <>
            {user?.email ? (
              <>
                <button onClick={handleLogOut}>Logout</button>
              </>
            ) : (
              <>
                <NavLink to={"/sign-up"}>Sign Up</NavLink>
                <NavLink to={"/login"}>Login</NavLink>
              </>
            )}
            {user?.photoURL && (
              <div
                className="tooltip  tooltip-bottom "
                data-tip={user?.displayName}
              >
                <img
                  className="rounded-full  ring-4 ring-sky-500 hover:ring-sky-600"
                  src={user?.photoURL}
                  style={{ width: "44px", height: "44px" }}
                  referrerPolicy="no-referrer"
                />
              </div>
            )}
          
        
    </>
  );

  return (
    <div>
      {/* This is nav bar
            <button onClick={handleGoogleSignIn} className="btn btn-danger button-outline">Sign in with Google</button>
            <button onClick={handleLogOut} className="btn btn-danger button-outline">Log Out</button>
            <Link className="btn btn-danger btn-outline" to={'/sign-up'}>Sign Up</Link>
            <Link className="btn btn-danger btn-outline" to={'/sign-up'}>Log in</Link> */}

      <div
        className={`navbar h-20 mb-2 px-6  max-w-screen-2xl bg-white shadow-lg`}
      >
        {/* <div className={`navbar h-20 mb-2 px-6  max-w-screen-2xl fixed z-10 ${theme === 'light'?'bg-white':'bg-gray-800' } shadow-lg`}> */}

        <div className="navbar-start space-x-2">To Do App</div>
        {/* <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal space-x-6  items-center font-semibold ">
          {centerNavItems}
        </ul>
      </div> */}
        <div className="navbar-end ">
          <ul className="menu menu-horizontal space-x-6 hidden lg:flex items-center  font-semibold">
            {endNavItems}
          </ul>

          <div className="dropdown dropdown-bottom dropdown-end">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-6 p-4 shadow bg-gray-800 text-gray-100  rounded-box w-52 items-center gap-3 z-10  "
            >
              {/* {centerNavItems} */}
              {endNavItems}
            </ul>
          </div>
        </div>
        {/* <hr /> */}
      </div>
    </div>
  );
};

export default Navbar;

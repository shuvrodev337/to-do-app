import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";

const Navbar = () => {
    const {user,
        loading,
        createUser, 
        signIn,
        googleSignIn,
        passwordReset, 
        logOut} = useContext(AuthContext)


        const handleGoogleSignIn = ()=>{
            googleSignIn()
            .then(result=>{
                const loggedInUser = result.user
                console.log(loggedInUser);
            })
            .catch(error=>{
                console.log(error.message);
            })
        }

        const handleLogOut =()=>{
            logOut()
            .then(()=>{})
            .catch(error=>{
                console.log(error.message);
            })
        }
    return (
        <div>
            This is nav bar
            <button onClick={handleGoogleSignIn} className="btn btn-danger button-outline">Sign in with Google</button>
            <button onClick={handleLogOut} className="btn btn-danger button-outline">Log Out</button>
            <Link className="btn btn-danger btn-outline" to={'/sign-up'}>Sign Up</Link>
            <Link className="btn btn-danger btn-outline" to={'/sign-up'}>Log in</Link>


        </div>
    );
};

export default Navbar;
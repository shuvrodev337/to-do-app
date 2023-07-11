import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

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
        </div>
    );
};

export default Navbar;
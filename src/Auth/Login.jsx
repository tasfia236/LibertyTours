import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup, GithubAuthProvider  } from "firebase/auth";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../Providers/AuthProviders";
import auth from "../firebase/firebase.config";

const Login = () => {
    const MySwal = withReactContent(Swal)
    
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const { signInUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogIn = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
     //   console.log(email, password);

        signInUser(email, password)
            .then(result => {
                console.log(result.user)
                MySwal.fire({
                    title: "User Logged In Successfully",
                    icon: "success",
                    showClass: {
                      popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                      `
                    },
                    hideClass: {
                      popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                      `
                    }
                  });

                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                MySwal.fire({
                    title: `error logging in, ${error.code}`,
                    icon: "warning",
                    showClass: {
                      popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                      `
                    },
                    hideClass: {
                      popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                      `
                    }
                  });
            })
    }

    const HandleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user)
                MySwal.fire({
                    title: "User Logged In Successfully",
                    icon: "success",
                    showClass: {
                      popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                      `
                    },
                    hideClass: {
                      popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                      `
                    }
                  });
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                MySwal.fire({
                    title: `error logging in, ${error.code}`,
                    icon: "warning",
                    showClass: {
                      popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                      `
                    },
                    hideClass: {
                      popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                      `
                    }
                  });
                console.error(error);
            })
    }

    const HandleGitHubSignIn = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                console.log(result.user)
                MySwal.fire({
                    title: "User Logged In Successfully",
                    icon: "success",
                    showClass: {
                      popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                      `
                    },
                    hideClass: {
                      popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                      `
                    }
                  });
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                MySwal.fire({
                    title: `error logging in, ${error.code}`,
                    icon: "warning",
                    showClass: {
                      popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                      `
                    },
                    hideClass: {
                      popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                      `
                    }
                  });
                console.error(error);
            })
    }

    return (
        
        <div className="p-12 min-h-screen bg-base-200">
          <Helmet>
                <title>Liberty Tours | Login</title>
            </Helmet>
            <div className="">
                <div className="text-center lg:text-left mb-8">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card shadow-2xl bg-base-100">
                    <form onSubmit={handleLogIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <div className="form-control">
                            <button onClick={ HandleGoogleSignIn } className="btn text-white bg-red-600">Google login</button>
                        </div>
                        <div className="form-control">
                            <button onClick={ HandleGitHubSignIn } className="btn text-white bg-black">GitHub login</button>
                        </div>
                    </form>
                    <p className="pl-5">
                        New Here? Please <Link to='/register'> <button className="btn btn-link">Register</button></Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
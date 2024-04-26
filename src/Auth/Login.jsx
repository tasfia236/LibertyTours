
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";

const Login = () => {


    return (
        <HelmetProvider>
            <div className="p-12 min-h-screen bg-base-200">
                <Helmet>
                    <title>Liberty Tours | Login</title>
                </Helmet>
                <div className="">
                    <div className="text-center lg:text-left mb-8">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card shadow-2xl bg-base-100">
                        <form className="card-body">
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
                                <button className="btn text-white bg-red-600">Google login</button>
                            </div>
                            <div className="form-control">
                                <button className="btn text-white bg-black">GitHub login</button>
                            </div>
                        </form>
                        <p className="pl-5">
                            New Here? Please <Link to='/register'> <button className="btn btn-link">Register</button></Link>
                        </p>
                    </div>
                </div>
            </div>
        </HelmetProvider>
    );
};

export default Login;
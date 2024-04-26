import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <HelmetProvider>
            <div className="p-12 min-h-screen bg-base-200">
                <Helmet>
                    <title>Liberty Tours | Registration</title>
                </Helmet>
                <div className="">
                    <div className="text-center lg:text-left mb-8">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                    </div>
                    <div className="card shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Your name" name="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoURL</span>
                                </label>
                                <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                        <p className="pl-5">
                            Already have an account? <Link to='/login'> <button className="btn btn-link">LogIn</button></Link>
                        </p>
                    </div>
                </div>
            </div>
        </HelmetProvider>
    );
};

export default Register;
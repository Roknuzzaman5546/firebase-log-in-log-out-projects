import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Authcontext } from "../Usecontext/Authprovider";

const Login = () => {
    const { signinUser, signinGoogle } = useContext(Authcontext)
    const navigate = useNavigate();
    
    const handleLogin = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)
        signinUser(email, password)
        .then(result =>{
            console.log(result.user)
            e.target.reset();
            navigate('/');
        })
        .catch(error =>{
            console.log(error)
        })
    }

    const handlegoogleLogin =  () =>{
        signinGoogle()
        .then(result =>{
            console.log(result.user)
        })
        .catch(error =>{
            console.log(error)
        })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleLogin}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered" required/>
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
                            </form>
                            <h2>If You new!! please <button className="btn btn-link"><Link to="/register">Register</Link></button> </h2>
                            <button onClick={handlegoogleLogin} className="btn btn-ghost">Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
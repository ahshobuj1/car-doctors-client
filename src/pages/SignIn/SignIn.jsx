import {Link} from 'react-router-dom';
import sighInImg from '../../assets/images/login/login.svg';
import {FaGoogle, FaFacebook, FaLinkedin} from 'react-icons/fa';
import {useContext} from 'react';
import {AuthContext} from '../../context/UserContext';
import Swal from 'sweetalert2';

const SignIn = () => {
    const {loginUser, signInWithGoogle} = useContext(AuthContext);

    const handleFormValue = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        loginUser(email, password)
            .then((res) => {
                console.log('user login', res.user);
                form.reset();
                Swal.fire({
                    icon: 'success',
                    title: 'Success...',
                    text: 'User Login successfully',
                });
            })
            .catch((err) => console.log(err.message));
    };

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then((res) => {
                console.log('google login', res.user);
            })
            .catch((err) => console.log(err.message));
    };

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img src={sighInImg} alt="login image" />
                </div>
                <div className=" w-full max-w-sm shrink-0">
                    <form onSubmit={handleFormValue} className="card-body">
                        <h2 className="text-3xl text-center font-medium">
                            Login
                        </h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="email"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="password"
                                className="input input-bordered"
                                required
                            />
                            <label className="label">
                                <a
                                    href="#"
                                    className="label-text-alt link link-hover">
                                    Forgot password?
                                </a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button
                                type="submit"
                                className="btn bg-orange-600 text-white">
                                Login
                            </button>
                        </div>
                    </form>

                    <div className="text-center space-y-6">
                        <p className="font-medium">Or Sign In with</p>
                        <div className="flex justify-center gap-6 ">
                            <button
                                onClick={handleGoogleLogin}
                                className="btn text-xl">
                                <FaGoogle />
                            </button>
                            <button className="btn text-xl">
                                <FaFacebook />
                            </button>
                            <button className="btn text-xl">
                                <FaLinkedin />
                            </button>
                        </div>

                        <p>
                            Don not have an account !
                            <Link
                                to="/signup"
                                className="text-blue-700 font-bold">
                                SignUp please
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;

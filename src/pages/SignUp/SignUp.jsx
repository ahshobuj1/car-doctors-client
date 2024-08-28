import {Link} from 'react-router-dom';
import sighInImg from '../../assets/images/login/login.svg';
import {FaGoogle, FaFacebook, FaLinkedin} from 'react-icons/fa';

const SignUp = () => {
    const handleFormValue = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);
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
                            Create Account
                        </h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="name"
                                name="name"
                                placeholder="Name"
                                className="input input-bordered"
                                required
                            />
                        </div>
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
                        </div>
                        <div className="form-control mt-6">
                            <button
                                type="submit"
                                className="btn bg-orange-600 text-white">
                                Register
                            </button>
                        </div>
                    </form>

                    <div className="text-center space-y-6">
                        <p className="font-medium">Or Sign Un with</p>
                        <div className="flex justify-center gap-6 ">
                            <button className="btn text-xl">
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
                            Already have an account !
                            <Link
                                to="/signin"
                                className="text-blue-700 font-bold">
                                Login please
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;

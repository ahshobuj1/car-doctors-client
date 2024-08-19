import banner2 from '../../../assets/images/banner/2.jpg';
import banner3 from '../../../assets/images/banner/3.jpg';
import banner5 from '../../../assets/images/banner/5.jpg';
import banner6 from '../../../assets/images/banner/6.jpg';

const Header = () => {
    return (
        <div className="carousel w-full h-[400px] md:h-[450px] lg:h-[600px] rounded-t-lg">
            <div id="slide1" className="carousel-item relative w-full ">
                <div className="absolute text-white bg-gradient-to-r from-[#151515] to-[#15151500]w-full h-full space-y-2 md:space-y-5 p-5 md:p-20">
                    <h1 className="text-2xl font-bold md:text-5xl ">
                        Affordable <br /> Price For Car <br /> Servicing
                    </h1>
                    <p className="text-xl">
                        There are many variations of passages of available, but
                        <br />
                        the majority have suffered alteration in some form
                    </p>

                    <div>
                        <button className="btn btn-secondary bg-red-500 mr-6 text-white">
                            Discover More
                        </button>
                        <button className="btn btn-outline text-white">
                            Latest project
                        </button>
                    </div>
                </div>

                <img src={banner6} className="w-full" />
                <div className="absolute bottom-5 right-5 flex space-x-6 ">
                    <a
                        href="#slide4"
                        className="btn btn-circle bg-red-500 text-white">
                        ❮--
                    </a>
                    <a
                        href="#slide2"
                        className="btn btn-circle bg-red-500 text-white">
                        --❯
                    </a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <div className="absolute text-white bg-gradient-to-r from-[#151515] to-[#15151500]w-full h-full space-y-2 md:space-y-5 p-5 md:p-20">
                    <h1 className="text-2xl font-bold md:text-5xl ">
                        Affordable <br /> Price For Car <br /> Servicing
                    </h1>
                    <p className="text-xl">
                        There are many variations of passages of available, but
                        <br />
                        the majority have suffered alteration in some form
                    </p>

                    <div>
                        <button className="btn btn-secondary bg-red-500 mr-6 text-white">
                            Discover More
                        </button>
                        <button className="btn btn-outline text-white">
                            Latest project
                        </button>
                    </div>
                </div>
                <img src={banner2} className="w-full" />
                <div className="absolute bottom-5 right-5 flex space-x-6 ">
                    <a
                        href="#slide1"
                        className="btn btn-circle bg-red-500 text-white">
                        ❮--
                    </a>
                    <a
                        href="#slide3"
                        className="btn btn-circle bg-red-500 text-white">
                        --❯
                    </a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <div className="absolute text-white bg-gradient-to-r from-[#151515] to-[#15151500]w-full h-full space-y-2 md:space-y-5 p-5 md:p-20">
                    <h1 className="text-2xl font-bold md:text-5xl ">
                        Affordable <br /> Price For Car <br /> Servicing
                    </h1>
                    <p className="text-xl">
                        There are many variations of passages of available, but
                        <br />
                        the majority have suffered alteration in some form
                    </p>

                    <div>
                        <button className="btn btn-secondary bg-red-500 mr-6 text-white">
                            Discover More
                        </button>
                        <button className="btn btn-outline text-white">
                            Latest project
                        </button>
                    </div>
                </div>
                <img src={banner3} className="w-full" />
                <div className="absolute bottom-5 right-5 flex space-x-6 ">
                    <a
                        href="#slide2"
                        className="btn btn-circle bg-red-500 text-white">
                        ❮--
                    </a>
                    <a
                        href="#slide4"
                        className="btn btn-circle bg-red-500 text-white">
                        --❯
                    </a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <div className="absolute text-white bg-gradient-to-r from-[#151515] to-[#15151500]w-full h-full space-y-2 md:space-y-5 p-5 md:p-20">
                    <h1 className="text-2xl font-bold md:text-5xl ">
                        Affordable <br /> Price For Car <br /> Servicing
                    </h1>
                    <p className="text-xl">
                        There are many variations of passages of available, but
                        <br />
                        the majority have suffered alteration in some form
                    </p>

                    <div>
                        <button className="btn btn-secondary bg-red-500 mr-6 text-white">
                            Discover More
                        </button>
                        <button className="btn btn-outline text-white">
                            Latest project
                        </button>
                    </div>
                </div>
                <img src={banner5} className="w-full" />
                <div className="absolute bottom-5 right-5 flex space-x-6 ">
                    <a
                        href="#slide3"
                        className="btn btn-circle bg-red-500 text-white">
                        ❮--
                    </a>
                    <a
                        href="#slide1"
                        className="btn btn-circle bg-red-500 text-white">
                        --❯
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Header;

import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
                <div className="border-l-rose-600 relative p-2 pr-16">
                    <img
                        src={person}
                        alt="person image"
                        className="rounded-xl"
                    />

                    <img
                        src={parts}
                        alt="parts images"
                        className="rounded-xl max-w-80 border-8 border-white absolute top-1/2 right-0"
                    />
                </div>
            </div>
            <div className="space-y-6 pt-24 m-5 md:p-2">
                <h4 className="text-[#FF3811] font-bold">About us</h4>
                <h2 className="text-3xl md:text-5xl font-bold">
                    We are qualified & of experience in this field
                </h2>
                <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable.
                </p>
                <p>
                    the majority have suffered alteration in some form, by
                    injected humour, or randomised words which don't look even
                    slightly believable.
                </p>

                <button className="btn bg-[#FF3811] text-white">
                    Get More Info
                </button>
            </div>
        </section>
    );
};

export default About;

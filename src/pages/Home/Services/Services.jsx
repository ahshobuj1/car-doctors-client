import {useEffect, useState} from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);
    return (
        <section>
            <div className="space-y-5 text-center p-5">
                <h4 className="text-[#FF3811] font-bold">services</h4>
                <h2 className="text-3xl md:text-5xl font-bold">
                    Our Service Area
                </h2>
                <p className="max-w-[650px] mx-auto">
                    the majority have suffered alteration in some form, by
                    injected humour, or randomised words which don't look even
                    slightly believable.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service) => (
                    <ServiceCard key={service._id} service={service} />
                ))}
            </div>

            <div className="text-center mt-12">
                <button className="btn btn-outline btn-error">
                    More Services
                </button>
            </div>
        </section>
    );
};

export default Services;

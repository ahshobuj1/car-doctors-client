import {Link, useLoaderData} from 'react-router-dom';

const ServiceDetails = () => {
    const service = useLoaderData();
    const {_id, title, img, description, price} = service;
    return (
        <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-3 md:p-0">
            <div className="md:col-span-2 lg:col-span-3 space-y-7">
                <img src={img} alt="images" className="max-h-96 rounded-xl" />
                <h2 className="text-5xl font-bold">{title}</h2>
                <h2 className="text-3xl font-bold">Price : ${price}</h2>
                <p>{description}</p>
            </div>
            <div>
                <Link to={`/checkout/${_id}`}>
                    <button className="btn btn-neutral">
                        Proceed Checkout
                    </button>
                </Link>
            </div>
        </section>
    );
};

export default ServiceDetails;

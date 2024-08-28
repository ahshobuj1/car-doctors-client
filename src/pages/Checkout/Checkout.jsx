import {useLoaderData} from 'react-router-dom';

const Checkout = () => {
    const service = useLoaderData();
    const {_id, title, price} = service;

    return (
        <section>
            <h1>{service.title}</h1>
            <div className="bg-[#F3F3F3] p-5 md:p-24 rounded-xl">
                <form>
                    <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
                        <div>
                            <input
                                type="text"
                                name="name"
                                id=""
                                required
                                placeholder="Name"
                                className="w-full rounded-xl h-14 pl-5"
                            />
                        </div>
                        <div>
                            <input
                                type="date"
                                name="date"
                                id=""
                                required
                                placeholder="date"
                                className="w-full rounded-xl h-14 pl-5"
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                name="service"
                                defaultValue={title}
                                id=""
                                required
                                placeholder="Service"
                                className="w-full rounded-xl h-14 pl-5"
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                name="email"
                                id=""
                                required
                                placeholder="Email"
                                className="w-full rounded-xl h-14 pl-5"
                            />
                        </div>
                        <div className="col-span-2">
                            <textarea
                                type="text"
                                name="message"
                                placeholder="Your Message"
                                className="w-full rounded-xl h-40 p-5"></textarea>
                        </div>
                    </div>
                    <button className="btn bg-orange-600 text-white my-6 w-full">
                        Order Confirm
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Checkout;

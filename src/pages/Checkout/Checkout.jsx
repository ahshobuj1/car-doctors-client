import {useContext} from 'react';
import {useLoaderData} from 'react-router-dom';
import {AuthContext} from '../../context/UserContext';
import Swal from 'sweetalert2';

const Checkout = () => {
    const service = useLoaderData();
    const {title, img, price} = service;
    const {user} = useContext(AuthContext);

    const handleCheckout = (e) => {
        e.preventDefault();
        const form = e.target;
        const price = form.price.value;
        const date = form.date.value;
        const titleName = form.tname.value;
        const email = form.email.value;
        const message = form.message.value;

        const bookings = {price, date, titleName, img, email, message};
        console.log(bookings);
        form.reset();

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(bookings),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Success...',
                        text: 'Order saved at My Booking',
                    });
                }
            })
            .catch((err) => console.log(err.message));
    };

    return (
        <section>
            <h1>{service.title}</h1>
            <div className="bg-[#F3F3F3] p-5 md:p-24 rounded-xl">
                <form onSubmit={handleCheckout}>
                    <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
                        <div>
                            <input
                                type="text"
                                name="tname"
                                defaultValue={title}
                                id=""
                                required
                                placeholder="Service"
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
                                name="price"
                                value={price}
                                id=""
                                required
                                placeholder="Size"
                                className="w-full rounded-xl h-14 pl-5"
                            />
                        </div>

                        <div>
                            <input
                                type="email"
                                name="email"
                                defaultValue={user?.email}
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
                    <button
                        type="submit"
                        className="btn bg-orange-600 text-white my-6 w-full">
                        Order Confirm
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Checkout;

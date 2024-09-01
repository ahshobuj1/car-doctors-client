import {useContext, useEffect, useState} from 'react';
import BookingTable from './BookingTable';
import {AuthContext} from '../../context/UserContext';
import UseAxiosSecure from '../../hooks/UseAxiosSecure';

const Booking = () => {
    const {user} = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const customAxios = UseAxiosSecure();

    useEffect(() => {
        customAxios
            .get(`/bookings?email=${user.email}`)
            .then((data) => setBookings(data.data))
            .catch((err) => console.log(err.catch));
    }, [customAxios, user.email]);

    return (
        <section>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input
                                        type="checkbox"
                                        className="checkbox"
                                    />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings?.map((book) => (
                            <BookingTable key={book._id} book={book} />
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default Booking;

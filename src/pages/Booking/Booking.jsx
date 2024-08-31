import {useContext, useEffect, useState} from 'react';
import BookingTable from './BookingTable';
import {AuthContext} from '../../context/UserContext';
import axios from 'axios';

const Booking = () => {
    const {user} = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:5000/bookings?email=${user.email}`, {
                withCredentials: true,
            })
            .then((data) => {
                console.log(data.data);
                setBookings(data.data);
            })
            .catch((err) => console.log(err.catch));
    }, [user]);

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

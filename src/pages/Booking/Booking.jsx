import {useContext, useEffect, useState} from 'react';
import BookingTable from './BookingTable';
import {AuthContext} from '../../context/UserContext';

const Booking = () => {
    const {user} = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/bookings?email=${user.email}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setBookings(data);
            })
            .catch((err) => console.log(err.catch));
    }, []);

    return (
        <section>
            <h1>bookings : {bookings.length}</h1>

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

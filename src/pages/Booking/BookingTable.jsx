import PropTypes from 'prop-types';

const BookingTable = ({book}) => {
    const {img, titleName, price, date} = book;

    return (
        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img src={img} alt="service image" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{titleName}</div>
                        <div className="text-sm opacity-50"></div>
                    </div>
                </div>
            </td>
            <td>$ {price}</td>
            <td>{date}</td>
            <th>
                <button className="btn btn-error bg-orange-600 text-white btn-sm">
                    pending
                </button>
            </th>
        </tr>
    );
};

export default BookingTable;

BookingTable.propTypes = {
    book: PropTypes.object,
};

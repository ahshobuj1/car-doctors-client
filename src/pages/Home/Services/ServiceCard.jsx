import PropTypes from 'prop-types'; // ES6
import {FaArrowRightLong} from 'react-icons/fa6';

const ServiceCard = ({service}) => {
    const {img, title, price} = service;

    return (
        <div className="card card-compact bg-base-100 shadow-xl p-6">
            <figure>
                <img src={img} alt="image" className="rounded-xl mb-5 h-52" />
            </figure>
            <div className="">
                <h2 className="card-title">{title}!</h2>
                <div className="flex justify-between text-orange-700">
                    <p>Price: {price}</p>
                    <button className="btn btn-sm bg-transparent rounded-full border-0 text-orange-700">
                        <FaArrowRightLong />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;

ServiceCard.propTypes = {
    service: PropTypes.object,
};

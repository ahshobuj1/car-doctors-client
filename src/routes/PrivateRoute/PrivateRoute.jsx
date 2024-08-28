import {useContext} from 'react';
import {AuthContext} from '../../context/UserContext';
import {Navigate, useLocation} from 'react-router-dom';
import PropTypes from 'prop-types'; // ES6

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return (
            <div className="flex w-52 flex-col gap-4">
                <div className="skeleton h-32 w-full"></div>
                <div className="skeleton h-4 w-28"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
            </div>
        );
    }
    if (user) {
        return children;
    }

    return <Navigate to="/signin" state={location.pathname} />;
};

export default PrivateRoute;

PrivateRoute.propTypes = {
    children: PropTypes.node,
};

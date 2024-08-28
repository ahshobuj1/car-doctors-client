import {createContext, useState} from 'react';
import PropTypes from 'prop-types'; // ES6

export const AuthContext = createContext();

const UserContext = ({children}) => {
    const [user, setUser] = useState('');

    const authInfo = {user};

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default UserContext;

UserContext.propTypes = {
    children: PropTypes.node,
};

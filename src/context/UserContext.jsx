import {createContext, useState} from 'react';
import PropTypes from 'prop-types'; // ES6
import auth from '../firebase/firebase.config';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from 'firebase/auth';

export const AuthContext = createContext();

const UserContext = ({children}) => {
    const [user, setUser] = useState('');

    // Create user with email and password
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // login user with email and password
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    // Log out user
    const logOutUser = () => {
        return signOut(auth);
    };

    const authInfo = {user, createUser, loginUser, logOutUser};

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default UserContext;

UserContext.propTypes = {
    children: PropTypes.node,
};

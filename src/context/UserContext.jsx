import {createContext, useEffect, useState} from 'react';
import PropTypes from 'prop-types'; // ES6
import auth from '../firebase/firebase.config';
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
} from 'firebase/auth';
import axios from 'axios';

export const AuthContext = createContext();
const provider = new GoogleAuthProvider();

const UserContext = ({children}) => {
    const [user, setUser] = useState('');
    const [loading, setLoading] = useState(true);

    // Create user with email and password
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // login user with email and password
    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // login with google
    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    };

    // Log out user
    const logOutUser = () => {
        return signOut(auth);
    };

    // Get current user with onAuthStateChanged
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            const userLogged = currentUser?.email || user?.email;
            const userEmail = {email: userLogged};
            if (currentUser) {
                console.log('currentUser ', currentUser);
                setUser(currentUser);
                setLoading(false);

                // jwt token
                axios
                    .post('http://localhost:5000/jwt', userEmail, {
                        withCredentials: true,
                    })
                    .then((res) => console.log(res.data))
                    .catch((err) => console.log(err.message));
            } else {
                setUser('');
                setLoading(false);

                // clear jwt token cookie
                axios
                    .post('http://localhost:5000/logout', userEmail, {
                        withCredentials: true,
                    })
                    .then((res) => console.log(res.data));
            }
        });

        return () => unsubscribe();
    }, [user]);

    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        logOutUser,
        signInWithGoogle,
    };

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default UserContext;

UserContext.propTypes = {
    children: PropTypes.node,
};

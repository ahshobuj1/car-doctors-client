import axios from 'axios';
import {useEffect} from 'react';

const customAxios = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true,
});

const UseAxiosSecure = () => {
    useEffect(() => {
        customAxios.interceptors.response.use(
            (response) => {
                return response;
            },
            (error) => {
                console.log('error tracked in interceptor', error.response);

                if (
                    error?.response?.status === 401 ||
                    error?.response?.status === 403
                ) {
                    console.log('logout the user');
                }
            }
        );
    }, []);

    return customAxios;
};

export default UseAxiosSecure;

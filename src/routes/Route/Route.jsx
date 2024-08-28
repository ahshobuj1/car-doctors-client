import {createBrowserRouter} from 'react-router-dom';
import App from '../../App';
import Home from '../../pages/Home/Home/Home';
import About from '../../pages/Home/About/About';
import Services from '../../pages/Home/Services/Services';
import ServiceDetails from '../../pages/ServiceDetails/ServiceDetails';
import Checkout from '../../pages/Checkout/Checkout';
import SignIn from '../../pages/SignIn/SignIn';
import SignUp from '../../pages/SignUp/SignUp';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/services',
                element: <Services />,
            },
            {
                path: '/serviceDetails/:id',
                loader: ({params}) =>
                    fetch(`http://localhost:5000/services/${params.id}`),
                element: <ServiceDetails />,
            },
            {
                path: '/checkout/:id',
                loader: ({params}) =>
                    fetch(`http://localhost:5000/services/${params.id}`),
                element: <Checkout />,
            },
            {
                path: '/signin',
                element: <SignIn />,
            },
            {
                path: '/signup',
                element: <SignUp />,
            },
        ],
    },
]);

export default router;

import {createBrowserRouter} from 'react-router-dom';
import App from '../../App';
import Home from '../../pages/Home/Home/Home';
import About from '../../pages/Home/About/About';
import Services from '../../pages/Home/Services/Services';

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
        ],
    },
]);

export default router;

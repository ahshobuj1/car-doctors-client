import {Outlet} from 'react-router-dom';
import Navbar from './pages/Shared/Navbar/Navbar';

function App() {
    return (
        <section className="max-w-6xl mx-auto">
            <Navbar />
            <Outlet />
        </section>
    );
}

export default App;

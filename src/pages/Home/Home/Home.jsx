import About from '../About/About';
import Header from '../Header/Header';
import Services from '../Services/Services';

const Home = () => {
    return (
        <section>
            <div>
                <Header />
            </div>

            <div className="my-20">
                <About />
            </div>
            <div>
                <Services />
            </div>
        </section>
    );
};

export default Home;

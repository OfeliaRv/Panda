import MainSection from "../components/MainSection"
import PageHeading from "../components/PageHeading"
import Widgets from '../components/Widgets'
import { DataContext } from '../DataContext'
import { useContext, useEffect } from 'react'
import NewsLine from "../components/NewsLine"
import ContactForm from "../components/ContactForm"
import ReactScrollWheelHandler from 'react-scroll-wheel-handler'

const Home = () => {
    const { clickedItem } = useContext(DataContext);
    const [clicked, setClicked] = clickedItem;

    useEffect(() => {
        if (clicked == null) {
            setClicked(0);
        }
    }, []);

    const nextIndex = () => {
        if (clicked == 2) {
            setClicked(0);
        } else {
            setClicked(clicked + 1);
        }
    };

    const prevIndex = () => {
        if (clicked == 0) {
            setClicked(2);
        } else {
            setClicked(clicked - 1);
        }
    };

    return (
        <ReactScrollWheelHandler upHandler={prevIndex} downHandler={nextIndex} timeout={500}>
            <PageHeading />
            <MainSection>
                {clicked == 0 &&
                    <div>
                        <div className="main-heading">
                            <h1>News</h1>
                        </div>
                        <div className="page-content">
                            <NewsLine />
                        </div>
                    </div>}
                {clicked == 1 &&
                    <div>
                        <div className="main-heading">
                            <h1>Customers</h1>
                        </div>
                        <div className="page-content" style={{ marginBottom: '20px' }}>
                            <Widgets />
                        </div>
                    </div>}
                {clicked == 2 &&
                    <div>
                        <div className="main-heading" style={{ marginLeft: '30px' }}>
                            <h1>Get in touch</h1>
                        </div>
                        <div className="page-content">
                            <ContactForm />
                        </div>
                    </div>}
            </MainSection>
        </ReactScrollWheelHandler>
    );
}

export default Home;
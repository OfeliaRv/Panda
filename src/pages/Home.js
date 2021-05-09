import MainSection from "../components/MainSection"
import PageHeading from "../components/PageHeading"
import Widgets from '../components/Widgets'
import { DataContext } from '../DataContext'
import { useContext, useEffect } from 'react'
import NewsLine from "../components/NewsLine"
import ContactForm from "../components/ContactForm"

const Home = () => {
    const { clickedItem } = useContext(DataContext);
    const [clicked, setClicked] = clickedItem;

    useEffect(() => {
        document.title = "Panda Navigation - Home";
        if (clicked == null) {
            setClicked(0);
        }
    }, []);

    const scrollHandler = (e) => {
        var newSlide;
        newSlide = Math.abs(clicked + e.deltaY * 0.004);
        setClicked(newSlide);

        if (e.deltaY > 0 && clicked == 2) {
            setClicked(0);
        }

        if (e.deltaY < 0 && clicked == 0) {
            setClicked(2);
        }
    }

    return (
        <div onWheel={scrollHandler}>
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
                        <div className="page-content">
                            <Widgets />
                        </div>
                    </div>}
                {clicked == 2 &&
                    <div>
                        <div className="main-heading">
                            <h1>Get in touch</h1>
                        </div>
                        <div className="page-content">
                            <ContactForm />
                        </div>
                    </div>}
            </MainSection>
        </div>
    );
}

export default Home;
import MainSection from "../components/MainSection"
import PageHeading from "../components/PageHeading"
import Widgets from '../components/Widgets'
import { useEffect } from 'react'
import NewsLine from "../components/NewsLine"
import ContactForm from "../components/ContactForm"
import { useSelector, useDispatch } from 'react-redux'
import { setHomepage } from '../actions/showData'

const Home = () => {
    const dispatch = useDispatch();

    // get active homepage
    const clickedHome = useSelector(state => state.home.activeHomepage);

    useEffect(() => {
        document.title = "Panda Navigation - Home";
    }, []);

    const scrollHandler = (e) => {
        var newSlide;
        newSlide = clickedHome + (Math.sign(e.deltaY));
        dispatch(setHomepage(newSlide));

        if (e.deltaY > 0 && clickedHome == 2) {
            dispatch(setHomepage(0));
        }

        if (e.deltaY < 0 && clickedHome == 0) {
            dispatch(setHomepage(2));
        }
    }

    return (
        <div onWheel={scrollHandler}>
            <PageHeading />
            <MainSection>
                {clickedHome == 0 &&
                    <div>
                        <div className="main-heading">
                            <h1>News</h1>
                        </div>
                        <div className="page-content">
                            <NewsLine />
                        </div>
                    </div>}
                {clickedHome == 1 &&
                    <div>
                        <div className="main-heading">
                            <h1>Customers</h1>
                        </div>
                        <div className="page-content">
                            <Widgets />
                        </div>
                    </div>}
                {clickedHome == 2 &&
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
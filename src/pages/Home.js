import MainSection from "../components/MainSection"
import PageHeading from "../components/PageHeading"
import Widgets from '../components/Widgets'
import { useEffect } from 'react'
import NewsLine from "../components/NewsLine"
import ContactForm from "../components/ContactForm"
import { useSelector, useDispatch } from 'react-redux'
import { setHomepage } from '../actions/showDataActions'

const Home = () => {
    const dispatch = useDispatch();

    // get active homepage
    const clickedHome = useSelector(state => state.home.activeHomepage);

    useEffect(() => {
        document.title = "Panda Navigation - Home";
    }, []);

    var scrollTimeout;
    const scrollHandler = e => {
        let sign = Math.sign(e.deltaY);
        if (sign === 0) return;

        window.clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            let newSlide = (clickedHome + sign + 3) % 3;
            dispatch(setHomepage(newSlide));
        }, 300);
    };

    return (
        <div id="homepage" onWheel={scrollHandler}>
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
import MainSection from "../components/MainSection"
import PageHeading from "../components/PageHeading"
import Widgets from '../components/Widgets'
import { useEffect } from 'react'
import NewsLine from "../components/NewsLine"
import ContactForm from "../components/ContactForm"
import { useSelector, useDispatch } from 'react-redux'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Mousewheel, Pagination } from 'swiper/core';
SwiperCore.use([Mousewheel, Pagination]);

const Home = () => {
    const dispatch = useDispatch();

    // get active homepage
    // const clickedHome = useSelector(state => state.home.activeHomepage);

    const buttons = document.getElementsByClassName("swiper-pagination-bullet");

    useEffect(() => {
        document.title = "Panda Navigation - Home";

        for (var i = 0; i < buttons.length; i++) {
            buttons[i].appendChild(document.createElement("div")).classList.add("bullet-dot");
        }
    }, []);

    // var scrollTimeout;
    // const scrollHandler = e => {
    //     let sign = Math.sign(e.deltaY);
    //     if (sign === 0) return;

    //     window.clearTimeout(scrollTimeout);
    //     scrollTimeout = setTimeout(() => {
    //         let newSlide = (clickedHome + sign + 3) % 3;
    //         dispatch(setHomepage(newSlide));
    //     }, 300);
    // };

    return (
        <>
            <PageHeading />
            <MainSection>
                <Swiper
                    direction={'vertical'}
                    slidesPerView={1}
                    mousewheel={true}
                    pagination={{
                        "clickable": true
                    }}
                    id="homepage"
                >
                    <SwiperSlide>
                        <div className="main-heading">
                            <h1>News</h1>
                        </div>
                        <div className="page-content">
                            <NewsLine />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="main-heading">
                            <h1>Customers</h1>
                        </div>
                        <div className="page-content">
                            <Widgets />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="main-heading">
                            <h1>Get in touch</h1>
                        </div>
                        <div className="page-content">
                            <ContactForm />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </MainSection>
        </>
    );
}

export default Home;
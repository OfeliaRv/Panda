import { useDispatch, connect } from 'react-redux'
import { showNews } from '../actions/showDataActions'
import { useEffect } from 'react'
import { fetchNews } from '../actions/newsAction'
import SwiperCore, { Autoplay, Navigation, Pagination, A11y } from 'swiper/core'
import { Swiper, SwiperSlide } from 'swiper/react'
import date_icon from '../assets/img/date-icon.svg'

SwiperCore.use([Autoplay, Navigation, Pagination, A11y]);

const NewsLine = ({ fetchNews, newsData }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        fetchNews();
    }, []);

    const handleNews = id => {
        dispatch(showNews(id));
    }

    // sort by date (show latest first)
    var news = newsData.news.sort((a, b) => (a.date > b.date) ? 1 : -1).reverse();

    return newsData.loading ? (
        <div className="loader-container">
            <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    ) : newsData.error ? (
        <h2>{newsData.error}</h2>
    ) : (
        <div className="news-slider" style={{width: "95%"}}>
            <Swiper slidesPerView={5}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                pagination={{
                    clickable: true
                }}
                loop={true}
                navigation={true}
                // spaceBetween={20}
                className="news-slider-container"
            >
                {newsData.news.length === 0 && <h2>No data to display</h2>}
                {newsData && newsData.news && news.map(news =>
                    <SwiperSlide key={news.id}>
                        <a href={"/news/" + news.id} className="news-item" onClick={(() => handleNews(news.id))}>
                            <div className="news-img">
                                <img className="news-image w-100" src={`../img/${news.photo}`} alt="news" />
                            </div>
                            <div className="news-info">
                                <h6>{news.title}</h6>
                                <div style={{ display: 'flex' }}>
                                    <img src={date_icon} alt="date icon" />
                                    <p>{news.date}</p>
                                </div>
                            </div>
                        </a>
                    </SwiperSlide>
                )}
            </Swiper>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        newsData: state.news
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchNews: () => dispatch(fetchNews())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewsLine)

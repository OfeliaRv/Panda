import date_icon from '../assets/img/date-icon.svg'
import { useSelector, useDispatch } from 'react-redux'
import { loadNews, showNews, showPage } from '../actions/showDataActions'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchNews } from '../actions/newsAction'
import { newsState } from '../reducers/data/newsReducer'

const NewsLine = ({ fetchNews, newsData }) => {
    const my_dispatch = useDispatch();

    useEffect(() => {
        fetchNews()
        console.log("newstate news: " + newsState.news);
        console.log("News data: " + newsData.news);
    }, [])

    // // get all news 
    // const news = useSelector(state => state.news.news);
    // const news = useSelector(state => state.news.news);

    // is loading (boolean)
    // const isLoading = useSelector(state => state.news.loading);

    // if there is an error
    // const error = useSelector(state => state.news.error);

    // show maximum 5 news on a page
    const getNewsRange = useSelector(state => state.showData.loadNews);

    // show current page (little grey dot)
    const activePage = useSelector(state => state.showData.showPage);

    // calculate the number of pages based on the amount of news
    var dots = [];
    const dots_num = Math.ceil(newsData.news.length / 5);
    for (let i = 0; i < dots_num; i++) {
        dots[i] = {
            id: i
        };
    }

    const handleSlides = id => {
        my_dispatch(loadNews(0 + 4 * id));
        my_dispatch(showPage(id));
    }

    const handleNews = id => {
        my_dispatch(showNews(id));
    }

    return newsData.loading ? (
        <h2>Loading</h2>
    ) : newsData.error ? (
        <h2>{newsData.error}</h2>
    ) : (
        <div className="news-slider">
            <div className="news-slider-container">
                {newsData && newsData.news && newsData.news.slice(getNewsRange.first, getNewsRange.last).map(news =>
                    <a href={"/news/" + news.id} className="news-item" key={news.id} onClick={() => handleNews((news.id))}>
                        <div className="news-img">
                            <img className="news-image" src={`../img/${news.photo}`} alt="news" />
                        </div>
                        <div className="news-info">
                            <h6>{news.title}</h6>
                            <div style={{ display: 'flex' }}>
                                <img src={date_icon} alt="date icon" />
                                <p>{news.date}</p>
                            </div>
                        </div>
                    </a>
                )}
            </div>
            <div className="slider-buttons">
                {dots.map(dot =>
                    <div className={"slide-button " + (dot.id === activePage ? "active-slide" : "")} key={dot.id} onClick={() => handleSlides(dot.id)}></div>
                )}
            </div>
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

// export default NewsLine;
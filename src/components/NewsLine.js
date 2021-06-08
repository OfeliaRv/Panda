import { useSelector, useDispatch, connect } from 'react-redux'
import { loadNews, showNews, showPage } from '../actions/showDataActions'
import { useEffect } from 'react'
import { fetchNews } from '../actions/newsAction'
import NewsItem from './NewsItem'

const NewsLine = ({ fetchNews, newsData }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        fetchNews();
        // dispatch(showPage(1));
    }, []);

    console.log(newsData);

    // show current page (little grey dot)
    // const activePage = useSelector(state => state.showData.showPage);

    // carousel value
    const style = useSelector(state => state.showData.carousel);

    // calculate the number of pages based on the amount of news
    // var dots = [];
    // const dots_num = Math.ceil(newsData.news.length / 4);
    // for (let i = 1; i <= dots_num; i++) {
    //     dots[i] = {
    //         id: i
    //     };
    // }

    // const handleSlides = id => {  // fix this

    //     if (id == dots_num) {
    //         dispatch(loadNews(id - 1, dots_num + 1));
    //         dispatch(showPage(id));
    //     } else {
    //         dispatch(loadNews(id - 1, dots_num));
    //         dispatch(showPage(id));
    //     }
    // }

    const makeRepeated = (arr, repeats) =>
        Array.from({ length: repeats }, () => arr).flat();

    const handleNews = id => {
        dispatch(showNews(id));
    }

    return newsData.loading ? (
        <h2>Loading...</h2>
    ) : newsData.error ? (
        <h2>{newsData.error}</h2>
    ) : (
        <div className="news-slider">
            <div className="news-slider-container" style={{ left: '-' + style + '%' }}>
                {/* {newsData && newsData.news && newsData.news.map(news => */}
                {newsData && newsData.news && makeRepeated(newsData.news, 50).map(news =>
                    <NewsItem news={news} key={Math.floor(Math.random() * 2000) + news.id + Math.floor(Math.random() * 2000)} handleNews={handleNews} />
                )}
            </div>
            {/* <div className="slider-buttons">
                {dots.map(dot =>
                    <div className={"slide-button " + (dot.id === activePage ? "active-slide" : "")} key={dot.id} onClick={() => handleSlides(dot.id)}></div>
                )}
            </div> */}
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

import date_icon from '../assets/img/date-icon.svg'
import { useSelector, useDispatch } from 'react-redux'
import { loadNews, showNews, showPage } from '../actions/showData'
import { Router } from 'react-router-dom'
import { useEffect } from 'react'
import { createBrowserHistory } from 'history'

const history = createBrowserHistory({ forceRefresh: true });

export const NewsLine = () => {
    const dispatch = useDispatch();

    useEffect(() => {    // may give errors in future when adding redirect to /news
        dispatch(showPage(0));
    }, [])

    // get all news 
    const news = useSelector(state => state.news.news);

    // show maximum 5 news on a page
    const getNewsRange = useSelector(state => state.showData.loadNews);

    // show current page (little grey dot)
    const activePage = useSelector(state => state.showData.showPage);

    // calculate the number of pages based on the amount of news
    var dots = [];
    const dots_num = Math.ceil(news.length / 5);
    for (let i = 0; i < dots_num; i++) {
        dots[i] = {
            id: i
        };
    }

    const handleSlides = id => {
        dispatch(loadNews(0 + 4 * id));
        dispatch(showPage(id));
    }

    const handleNews = id => {
        dispatch(showNews(id));

        // if (window.location.pathname != '/news/' +id) {
        //     history.push('/news/'+ id)
        // }
    }

    return (
        <div className="news-slider">
            <div className="news-slider-container">
                {news.slice(getNewsRange.first, getNewsRange.last).map(news =>
                    <div className="news-item" key={news.id} onClick={() => handleNews((news.id))}>
                        <div className="news-img">
                            <img className="news-image" src={news.photo} alt="news" />
                        </div>
                        <div className="news-info">
                            <h6>{news.title}</h6>
                            <div style={{ display: 'flex' }}>
                                <img src={date_icon} alt="date icon" />
                                <p>{news.date}</p>
                            </div>
                        </div>
                    </div>
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

export default NewsLine;
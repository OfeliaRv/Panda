import { DataContext } from '../DataContext'
import { useContext } from 'react'
import date_icon from '../assets/img/date-icon.svg'

const NewsLine = () => {

    const { newsData } = useContext(DataContext);
    const [news] = newsData;

    return (
        <div className="news-slider">
            <div className="news-slider-container">
                {news.map(news =>
                    <div className="news-item">
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
                <div className="slide-button active-slide"></div>
                {[...Array(5)].map(i =>
                    <div className="slide-button" key={i}></div>
                )}
            </div>
        </div>
    );
}

export default NewsLine;
import { DataContext } from '../DataContext'
import { useContext } from 'react'
import date_icon from '../assets/img/date-icon.svg'
import { Link } from 'react-router-dom';

export const NewsLine = () => {
    const { newsData, firstSlide, lastSlide, clickedSlide, clickedNews } = useContext(DataContext);
    const [news] = newsData;
    const [firstS, setfirstS] = firstSlide;
    const [lastS, setlastS] = lastSlide;
    const [clickedS, setclickedS] = clickedSlide;
    const [clickedN, setclickedN] = clickedNews;

    var dots = [];
    const dots_num = Math.ceil(news.length / 5);
    for (let i = 0; i < dots_num; i++) {
        dots[i] = {
            id: i
        };
    }

    const handleSlides = id => {
        setfirstS(0 + 4 * id);
        setlastS(5 + 4 * id);
        setclickedS(id);
    }

    return (
        <div className="news-slider">
            <div className="news-slider-container">
                {news.slice(firstS, lastS).map(news =>
                    <div className="news-item" key={news.id} onClick={() => setclickedN(news.id)}>
                        <Link to="/news">
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
                        </Link>
                    </div>
                )}
            </div>
            <div className="slider-buttons">
                {dots.map(dot =>
                    <div className={"slide-button " + (dot.id === clickedS ? "active-slide" : "")} key={dot.id} onClick={() => handleSlides(dot.id)}></div>
                )}
            </div>
        </div>
    );
}

export default NewsLine;
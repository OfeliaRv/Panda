import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import NewsLine from '../components/NewsLine'
import MainSection from '../components/MainSection'
import { useSelector } from 'react-redux'

const News = () => {
    const { id } = useParams();

    // get all news
    const news = useSelector(state => state.news.news);

    // show selected news
    const news_selected = useSelector(state => state.showData.showNews);

    useEffect(() => {
        document.title = "Panda Navigation - News - " + news[news_selected].title
    }, [])

    return (
        <div id="news">
            <MainSection>
                <div className="main-heading">
                    <h1>News</h1>
                </div>
                <NewsLine />
                <div className="news-container">
                    <div className="main-heading">
                        <h1>{news[id].title}</h1>
                    </div>
                    <div className="news-data">
                        <img src={news[id].photo} alt="imgjd" />
                        <div className="news-text">
                            <p>{news[id].text}</p>
                        </div>
                    </div>
                </div>
            </MainSection>
        </div>
    );
}

export default News;
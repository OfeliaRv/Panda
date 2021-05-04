import { DataContext } from '../DataContext'
import { useContext, useEffect } from 'react'
import NewsLine from '../components/NewsLine'
import MainSection from '../components/MainSection'

const News = () => {
    
    const { newsData, clickedNews } = useContext(DataContext);
    const [news] = newsData;
    const [clickedN] = clickedNews;

    useEffect(() => {
        document.title = "Panda Navigation - News - " + news[clickedN].title
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
                        <h1>{news[clickedN].title}</h1>
                    </div>
                    <div className="news-data">
                        <img src={news[clickedN].photo} alt="imgjd" />
                        <div className="news-text">
                            <p>{news[clickedN].text}</p>
                        </div>
                    </div>
                </div>
            </MainSection>
        </div>
    );
}

export default News;
import { DataContext } from '../DataContext'
import { useContext } from 'react'
import NewsLine from '../components/NewsLine'
import MainSection from '../components/MainSection'

const News = () => {

    const { newsData } = useContext(DataContext);
    const [news] = newsData;
    return (
        <div id="news">
            <MainSection>
                <div className="main-heading">
                    <h1>News</h1>
                </div>
                <NewsLine />
                <div className="news-container">
                    <div className="main-heading">
                        <h1>Heading</h1>
                    </div>
                    <div className="news-data">
                        <img src={news[0].photo} alt="imgjd" />
                        <div className="news-text">
                            <p>{news[0].text}</p>
                        </div>
                    </div>
                </div>
            </MainSection>
        </div>
    );
}

export default News;
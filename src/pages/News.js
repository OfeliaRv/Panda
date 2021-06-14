import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { connect, useSelector } from 'react-redux'
import parse from 'html-react-parser'
import { fetchOneNews, fetchNews } from '../actions/newsAction'
import NewsLine from '../components/NewsLine'
import MainSection from '../components/MainSection'

const News = ({ fetchOneNews, fetchNews, newsData }) => {
    const { id } = useParams();

    const news = useSelector(state => state.news.news);

    useEffect(() => {
        if (id === '' || id === undefined || id === null) {
            fetchOneNews(news[0].id)
        } else {
            fetchOneNews(id);
        }

        // console.log(newsData.news[0].id);
        console.log(newsData);
    }, [id])

    return (
        <div id="news">
            <MainSection>
                <div className="main-heading">
                    <h1>News</h1>
                </div>
                <NewsLine />
                {newsData && newsData.one_news &&
                    <div className="news-container">
                        <div className="main-heading">
                            <h1>{newsData.one_news.title}</h1>
                        </div>
                        <div className="news-data">
                            <img src={'./../img/' + newsData.one_news.photo} alt={newsData.one_news.altName} />
                            <div id="text" className="news-text">
                                {parse(`${newsData.one_news.newsText}`)}
                            </div>
                        </div>
                    </div>
                }
            </MainSection>
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
        fetchNews: () => dispatch(fetchNews()),
        fetchOneNews: id => dispatch(fetchOneNews(id))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(News)
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import NewsLine from '../components/NewsLine'
import MainSection from '../components/MainSection'
import { connect } from 'react-redux'
import { fetchNews, fetchOneNews } from '../actions/newsAction'

const News = ({ fetchOneNews, newsData, fetchNews }) => {
    const { id } = useParams();

    useEffect(() => {
        fetchOneNews(id);
        console.log(newsData.one_news);
    }, [])

    // useEffect(() => {
    //     fetchNews();
    // }, [])
   

    return (
    // newsData.loading ? (
    //     <h2>Loading...</h2>
    // ) : newsData.error ? (
    //     <h2>{newsData.error}</h2>
    // ) : (
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
                            <img src={'./../img/' + newsData.one_news.photo} alt={newsData.one_news.title} />
                            <div className="news-text">
                                <p>{newsData.one_news.newsText}</p>
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
        fetchOneNews: (id) => dispatch(fetchOneNews(id)),
        fetchNews: () => dispatch(fetchNews())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(News)
import Table from 'react-bootstrap/Table'
import { Link } from "react-router-dom"
import parse from 'html-react-parser'
import edit from '../assets/img/edit.svg'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchNews } from '../actions/NewsAction'

const News = ({ fetchNews, newsData }) => {
    useEffect(() => {
        fetchNews();
    }, []);

    // sort by date (show latest first)
    var news = newsData.news.sort((a, b) => (a.date > b.date) ? 1 : -1).reverse();

    return (
        <div className="dashboard" id="news">
            <div className="dashboard-header">
                <h1>PANDA News list</h1>
                <Link to="/addnews">
                    <div className="add-button">
                        <p>Add news</p>
                    </div>
                </Link>
            </div>
            <Table bordered responsive size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>News Title</th>
                        <th>News Date</th>
                        {/* <th>News Text</th> */}
                        <th>News Alt Name</th>
                        <th>News Keywords</th>
                        {/* <th>News Image</th> */}
                        <th>Actions</th>
                    </tr>
                </thead>
                {newsData.loading ? (
                    <h2>Loading</h2>
                ) : newsData.error ? (
                    <h2>{newsData.error}</h2>
                ) : newsData.news.length === 0 ? (
                    <h2>No data to display</h2>
                ) : (
                    <tbody>
                        {newsData && newsData.news && news.map(news =>
                            <tr key={news.id}>
                                <td>{newsData.news.indexOf(news) + 1}</td>
                                <td>{news.title}</td>
                                <td>{news.date}</td>
                                {/* <td>{parse(`${news.newsText}`)}</td> */}
                                <td>{news.altName}</td>
                                <td>{news.keywords}</td>
                                {/* <td>{news.photo}</td> */}
                                <td className="actions">
                                    <Link to={"/editnews/" + news.id}><img src={edit} alt="edit" title="Edit" /> </Link>
                                </td>
                            </tr>
                        )}
                    </tbody>
                )}
            </Table>
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
)(News)

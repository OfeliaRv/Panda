import Table from 'react-bootstrap/Table'
import { Link, Router } from "react-router-dom"
import edit from '../assets/img/edit.svg'
import { createBrowserHistory } from 'history'

const history = createBrowserHistory();

const News = () => {
    return (
        <Router history={history}>
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
                            <th>News Text</th>
                            <th>News Alt Name</th>
                            <th>News Keywords</th>
                            <th>News Image</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            {Array.from({ length: 6 }).map((_, index) => (
                                <td key={index}>Table cell {index}</td>
                            ))}
                            <td className="actions">
                                <img src={edit} alt="edit" title="Edit" onClick={() => history.push('/editnews')} />
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            {Array.from({ length: 6 }).map((_, index) => (
                                <td key={index}>Table cell {index}</td>
                            ))}
                            <td className="actions">
                                <img src={edit} alt="edit" title="Edit" onClick={() => <Link to="/editNews" />} />
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </Router>
    );
}

export default News;
import Table from 'react-bootstrap/Table'
import { Link } from "react-router-dom"

const News = () => {
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
                        {Array.from({ length: 5 }).map((_, index) => (
                            <th key={index}>Table heading</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <td key={index}>Table cell {index}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>2</td>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <td key={index}>Table cell {index}</td>
                        ))}
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default News;
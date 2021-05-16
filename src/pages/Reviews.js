import Table from 'react-bootstrap/Table'
import { Link } from "react-router-dom"
import edit from '../assets/img/edit.svg'

const Reviews = () => {
    return (
        <div className="dashboard" id="reviews">
            <div className="dashboard-header">
                <h1>PANDA Reviews list</h1>
                <Link to="/addreview">
                    <div className="add-button">
                        <p>Add review</p>
                    </div>
                </Link>
            </div>
            <Table bordered responsive size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Full name</th>
                        <th>Company</th>
                        <th>Position</th>
                        <th>Review text</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        {Array.from({ length: 4 }).map((_, index) => (
                            <td key={index}>Table cell {index}</td>
                        ))}
                        <td className="actions">
                            <img src={edit} alt="edit" title="Edit" />
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        {Array.from({ length: 4 }).map((_, index) => (
                            <td key={index}>Table cell {index}</td>
                        ))}
                        <td className="actions">
                            <img src={edit} alt="edit" title="Edit" />
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default Reviews;
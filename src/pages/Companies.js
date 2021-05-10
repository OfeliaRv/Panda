import Table from 'react-bootstrap/Table'
import { Link } from "react-router-dom"
import edit from '../assets/img/edit.svg'

const Companies = () => {
    return (
        <div className="dashboard" id="companies">
            <div className="dashboard-header">
                <h1>PANDA Companies list</h1>
                <Link to="/addcompany">
                    <div className="add-button">
                        <p>Add company</p>
                    </div>
                </Link>
            </div>
            <Table bordered responsive size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Comapany Name</th>
                        <th>X-position</th>
                        <th>Y-position</th>
                        <th>Company Image</th>
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
 
export default Companies;
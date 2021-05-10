import Table from 'react-bootstrap/Table'
import { Link } from "react-router-dom"
import edit from '../assets/img/edit.svg'

const Products = () => {
    return (
        <div className="dashboard" id="products">
            <div className="dashboard-header">
                <h1>PANDA Products list</h1>
                <Link to="/addproduct">
                    <div className="add-button">
                        <p>Add product</p>
                    </div>
                </Link>
            </div>
            <Table bordered responsive size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product Name</th>
                        <th>Product Alt Name</th>
                        <th>Product Keywords</th>
                        <th>Product Text</th>
                        <th>Product Image</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <td key={index}>Table cell {index}</td>
                        ))}
                        <td className="actions">
                            <img src={edit} alt="edit" title="Edit" />
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        {Array.from({ length: 5 }).map((_, index) => (
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

export default Products;
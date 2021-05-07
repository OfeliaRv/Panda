import Table from 'react-bootstrap/Table'
import { Link } from "react-router-dom"

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

export default Products;
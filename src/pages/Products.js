import Table from 'react-bootstrap/Table'
import { Link } from "react-router-dom"
import edit from '../assets/img/edit.svg'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchProducts } from '../actions/ProductAction'

const Products = ({ fetchProducts, productsData }) => {
    useEffect(() => {
        fetchProducts();
    }, []);

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
                {productsData.loading ? (
                    <h2>Loading</h2>
                ) : productsData.error ? (
                    <h2>{productsData.error}</h2>
                ) : productsData.products.length === 0 ? (
                    <h2>No data to display</h2>
                ) : (
                    <tbody>
                        {productsData && productsData.products && productsData.products.map(product =>
                            <tr key={product.id}>
                                <td>{productsData.products.indexOf(product) + 1}</td>
                                <td>{product.name}</td>
                                <td>{product.altName}</td>
                                <td>{product.keywords}</td>
                                <td>{product.productText}</td>
                                <td>{product.photo}</td>
                                <td className="actions">
                                    <Link to={"/editproduct/" + product.id}><img src={edit} alt="edit" title="Edit" /> </Link>
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
        productsData: state.products
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchProducts: () => dispatch(fetchProducts())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Products)
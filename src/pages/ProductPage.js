import { useEffect } from 'react'
import { useParams, Router } from 'react-router-dom'
import MainSection from '../components/MainSection'
import { createBrowserHistory } from 'history'
import { connect } from 'react-redux'
import { fetchProduct } from '../actions/productAction'

const history = createBrowserHistory();

const ProductPage = ({ productData, fetchProduct }) => {
    const { id } = useParams();

    useEffect(() => {
        fetchProduct(id);
        document.title = "Panda Navigation - " + productData.product.name;
    }, [id])

    return (
        <div id="product-page">
            <Router history={history}>
                <MainSection>
                    {productData.loading ? (
                        <h2>Loading...</h2>
                    ) : productData.error ? (
                        <h2>{productData.error}</h2>
                    ) : (
                        <div className="product-container">
                            <div className="page-path">
                                <a href="/">Home</a> <span>/</span> <a onClick={() => history.go(-1)}>Products</a> <span>/</span> <a>{productData.product.name}</a>
                            </div>
                            <div className="main-heading">
                                <h1>{productData.product.name}</h1>
                            </div>
                            <div className="product-content">
                                <div className="product-img">
                                    <img src={`../img/${productData.product.photo}`} alt={productData.product.name} />
                                </div>
                                <div className="product-text">
                                    <p>{productData.product.productText}</p>
                                </div>
                            </div>
                        </div>)}
                </MainSection>
            </Router>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        productData: state.products // access data in products reducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProduct: (id) => dispatch(fetchProduct(id)) // access function to fetch the product
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductPage)
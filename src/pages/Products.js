import { useEffect } from 'react'
import MainSection from '../components/MainSection'
import { useSelector, useDispatch, connect } from 'react-redux'
import { loadProducts, showPage } from '../actions/showDataActions'
import { fetchProducts } from '../actions/productAction'

const Products = ({ fetchProducts, productsData }) => {
    const my_dispatch = useDispatch();

    // show maximum 6 products on a page
    const getProductsRange = useSelector(state => state.showData.loadProducts);

    // show current page (little grey dot)
    const activePage = useSelector(state => state.showData.showPage);

    useEffect(() => {
        fetchProducts();
        document.title = "Panda Navigation - Products"
    }, [])

    var dots = [];
    const dots_num = Math.ceil(productsData.products.length / 6);
    for (let i = 0; i < dots_num; i++) {
        dots[i] = {
            id: i
        };
    }

    const handleSlides = id => {
        my_dispatch(loadProducts(0 + 6 * id));
        my_dispatch(showPage(id));
    }

    return productsData.loading ? (
        <h2>Loading...</h2>
    ) : productsData.error ? (
        <h2>{productsData.error}</h2>
    ) : (
        <div id="products">
            <MainSection>
                <div className="products">
                    {productsData.products.length === 0 && <h2>No data to display</h2>}
                    {productsData && productsData.products && productsData.products.slice(getProductsRange.first, getProductsRange.last).map(product =>
                        <a href={`/products/${product.id}`} key={product.id}><div className="product white-button">
                            <h6>{product.name}</h6>
                        </div></a>
                    )}
                </div>
            </MainSection>
            <div className="slider-buttons" style={{ padding: '0 17%' }}>
                {dots.map(dot =>
                    <div className={"slide-button " + (dot.id === activePage ? "active-slide" : "")} key={dot.id} onClick={() => handleSlides(dot.id)}></div>
                )}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        productsData: state.products // access data in products reducer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchProducts: () => dispatch(fetchProducts()) // access function to fetch all products
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Products)
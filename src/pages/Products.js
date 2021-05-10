import { useEffect } from 'react'
import MainSection from '../components/MainSection'
import { useSelector, useDispatch } from 'react-redux'
import { loadProducts, showPage } from '../actions/showData'

const Products = () => {
    const dispatch = useDispatch();

    // get all products
    const products = useSelector(state => state.products.products);

    // show maximum 6 products on a page
    const getProductsRange = useSelector(state => state.showData.loadProducts);

    // show current page (little grey dot)
    const activePage = useSelector(state => state.showData.showPage);

    useEffect(() => {
        document.title = "Panda Navigation - Products"
    }, [])

    var dots = [];
    const dots_num = Math.ceil(products.length / 6);
    for (let i = 0; i < dots_num; i++) {
        dots[i] = {
            id: i
        };
    }

    const handleSlides = id => {
        dispatch(loadProducts(0 + 6 * id));
        dispatch(showPage(id));
    }

    return (
        <div id="products">
            <MainSection>
                <div className="products">
                    {products.slice(getProductsRange.first, getProductsRange.last).map(product =>
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

export default Products;
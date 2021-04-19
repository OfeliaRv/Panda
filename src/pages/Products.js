import { useContext } from 'react'
import { DataContext } from '../DataContext'
import MainSection from '../components/MainSection'
import { Link } from 'react-router-dom'

const Products = () => {
    const { productData, firstProduct, lastProduct } = useContext(DataContext);
    const [products] = productData;
    const [firstP] = firstProduct;
    const [lastP] = lastProduct;

    return (
        <div id="products">
            <MainSection>
                <div className="products">
                    {products.slice(firstP, lastP).map(product =>
                        <Link to={`/products/${product.id}`} key={product.id}><div className="product white-button">
                            <h6>{product.name}</h6>
                        </div></Link>
                    )}
                </div>
            </MainSection>
        </div>
    );
}

export default Products;
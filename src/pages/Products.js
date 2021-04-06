import { useContext } from 'react'
import { DataContext } from '../DataContext'
import MainSection from '../components/Home/MainSection'
import { Link } from 'react-router-dom'

const Products = () => {
    const { productData } = useContext(DataContext);
    const [products] = productData;

    return (
        <div id="products">
            <MainSection>
                <div className="products">
                    {products.map(product =>
                        <Link to={`/products/${product.id}`} key={product.id}><div className="product">
                            <h6>{product.name}</h6>
                        </div></Link>
                    )}
                </div>
            </MainSection>
        </div>
    );
}

export default Products;
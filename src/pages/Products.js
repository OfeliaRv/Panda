import { useContext } from 'react'
import { DataContext } from '../DataContext'
import MainSection from '../components/MainSection/MainSection'

const Products = () => {
    const { productData } = useContext(DataContext);
    const [products] = productData;

    return (
        <div id="products">
            <MainSection>
                <div className="products">
                    {products.map(product =>
                        <div className="product">
                            <h6>{product.name}</h6>
                        </div>
                    )}
                </div>
            </MainSection>
        </div>
    );
}

export default Products;
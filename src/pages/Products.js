import { useContext, useEffect } from 'react'
import { DataContext } from '../DataContext'
import MainSection from '../components/MainSection'
import { Link } from 'react-router-dom'

const Products = () => {
    const { productData, firstProduct, lastProduct } = useContext(DataContext);
    const [products] = productData;
    const [firstP] = firstProduct;
    const [lastP] = lastProduct;

    useEffect(() => {
        document.title = "Panda Navigation - Products"
    }, [])

    return (
        <div id="products">
            <MainSection>
                <div className="products">
                    {products.slice(firstP, lastP).map(product =>
                        <a href={`/products/${product.id}`} key={product.id}><div className="product white-button">
                            <h6>{product.name}</h6>
                        </div></a>
                    )}
                </div>
            </MainSection>
        </div>
    );
}

export default Products;
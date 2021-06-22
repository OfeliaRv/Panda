import { useEffect } from 'react'
import { connect } from 'react-redux'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper/core'
import { Swiper, SwiperSlide } from 'swiper/react'
import MainSection from '../components/MainSection'
import { fetchProducts } from '../actions/productAction'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Products = ({ fetchProducts, productsData }) => {
    useEffect(() => {
        fetchProducts();
        document.title = "Panda Navigation - Products"
    }, [])

    return productsData.loading ? (
        <div className="loader-container">
            <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    ) : productsData.error ? (
        <h2>{productsData.error}</h2>
    ) : (
        <div id="products">
            <MainSection>
                <>
                    <Swiper slidesPerView={3} slidesPerColumn={2} className="products"
                        navigation={true}
                        pagination={{ clickable: true }}
                    >
                        {productsData.products.length === 0 && <h2>No data to display</h2>}
                        {productsData && productsData.products && productsData.products.map(product =>
                            <SwiperSlide className="product white-button" tag="a" href={`/products/${product.id}`} key={product.id}>
                                <h6>{product.name}</h6>
                            </SwiperSlide>
                        )}
                    </Swiper>
                </>
            </MainSection>
            {/* <div className="slider-buttons" style={{ padding: '0 17%' }}>
                {dots.map(dot =>
                    <div className={"slide-button " + (dot.id === activePage ? "active-slide" : "")} key={dot.id} onClick={() => handleSlides(dot.id)}></div>
                )}
            </div> */}
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
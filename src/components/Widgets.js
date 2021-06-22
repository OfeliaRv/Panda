import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import parse from 'html-react-parser'
import { fetchCustomers } from '../actions/customerAction'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper/core'
import { Swiper, SwiperSlide } from 'swiper/react'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Widgets = ({ fetchCustomers, customersData }) => {
    const [showPopup, setShowPopup] = useState(false);
    const [popupData, setPopupData] = useState({});

    useEffect(() => {
        // get all customers/companies
        fetchCustomers();
    }, []);

    const showInfo = data => {
        setShowPopup(true);
        setPopupData(data);
    }

    return customersData.loading ? (
        <div className="loader-container">
            <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    ) : customersData.error ? (
        <h2>{customersData.error}</h2>
    ) : (
        <>
        <div className="widgets-page">
            <Swiper className="widgets-row"
                slidesPerView={'auto'}
                loopedSlides={10}
                loop={true}
                navigation={true}
                pagination={{ clickable: true }}
            >
                {customersData.customers.length === 0 && <h2>No data to display</h2>}
                {customersData && customersData.customers && customersData.customers.map(widget =>
                    <SwiperSlide key={widget.id} className="widget" onClick={() => showInfo(widget)}>
                        <div className="widget-data">
                            <div className="widget-logo">
                                <img src={`../img/customers/${widget.logo}`} alt="logo" />
                            </div>
                            <div className="widget-text">
                                <p>{widget.name}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                )}
            </Swiper>
        </div>
        {/* POPUP CARD */}
        {/* {showPopup && <div className="popup-card">
        <div className="popup-card-inner">
            <div className="close-popup" onClick={() => setShowPopup(false)}>
                <div className="white-button">X</div>
            </div>
            <div className="card-content">
                <div>
                    <h1>{popupData.name}</h1>
                    <img src={"../img/customers/" + popupData.logo} alt={popupData.name} />
                </div>
                <div className="info-container">
                    <div className="info-text">{parse(`${popupData.about}`)}</div>
                </div>
            </div>
        </div>
    </div>} */}
    {/* POPUP CARD */}
    </>
    );
}

const mapStateToProps = state => {
    return {
        // access data in customers reducer
        customersData: state.customers
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // access the action to get all customers
        fetchCustomers: () => dispatch(fetchCustomers())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Widgets)
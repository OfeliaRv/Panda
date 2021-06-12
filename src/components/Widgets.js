import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useSelector, useDispatch } from 'react-redux'
import { loadWidgets, showPage } from '../actions/showDataActions'
import { fetchCustomers } from '../actions/customerAction'

const Widgets = ({ fetchCustomers, customersData }) => {
    const [showPopup, setShowPopup] = useState(false);
    const [popupData, setPopupData] = useState({});

    useEffect(() => {
        fetchCustomers();
        document.title = "Panda Navigation - Customers"
    }, []);

    const showInfo = data => {
        setShowPopup(true);
        setPopupData(data);
    }

    const dispatch = useDispatch();

    const widgets = customersData.customers;

    // show maximum 3 widgets on a page
    const getWidgetsRange = useSelector(state => state.showData.loadWidgets);

    // show current page (little grey dot)
    const activePage = useSelector(state => state.showData.showPage);

    var dots = [];
    const dots_num = Math.ceil(widgets.length / 3);
    for (let i = 0; i < dots_num; i++) {
        dots[i] = {
            id: i
        };
    }

    const handleSlides = id => {
        dispatch(loadWidgets(0 + 3 * id));
        dispatch(showPage(id));
    }

    return customersData.loading ? (
        <h2>Loading...</h2>
    ) : customersData.error ? (
        <h2>{customersData.error}</h2>
    ) : (
        <div>
            <div className="widgets-row">
                {customersData.customers.length === 0 && <h2>No data to display</h2>}
                {customersData && customersData.customers && customersData.customers.slice(getWidgetsRange.first, getWidgetsRange.last).map(widget =>
                    <div className="widget" key={widget.id} onClick={() => showInfo(widget)}>
                        <div className="widget-data">
                            <div className="widget-logo">
                                <img src={widget.logo} alt="logo" />
                            </div>
                            <div className="widget-text">
                                <p>{widget.name}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className="slider-buttons">
                {dots.map(dot =>
                    <div className={"slide-button " + (dot.id === activePage ? "active-slide" : "")} key={dot.id} onClick={() => handleSlides(dot.id)}></div>
                )}
            </div>

            {showPopup && <div className="popup-card">
                <div className="popup-card-inner">
                    <div className="close-popup" onClick={() => setShowPopup(false)}>
                        <div className="white-button">X</div>
                    </div>
                    <div className="card-content">
                        <div>
                            <h1>{popupData.name}</h1>
                            <img src={popupData.logo} alt={popupData.name} />
                        </div>
                        <div className="info-container">
                            <p className="info-text">{popupData.about}</p>
                        </div>
                    </div>
                </div>
            </div>}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        customersData: state.customers // access data in customers reducer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchCustomers: () => dispatch(fetchCustomers()) // access function to fetch all customers
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Widgets)
import map from '../assets/img/map.png'
import { useEffect, useState } from 'react'
import MainSection from '../components/MainSection'
import { connect } from 'react-redux'
import { fetchCustomers } from '../actions/customerAction'

const Customers = ({ fetchCustomers, customersData }) => {
    const [showPopup, setShowPopup] = useState(false);
    const [popupData, setPopupData] = useState({});

    useEffect(() => {
        fetchCustomers();
        document.title = "Panda Navigation - Customers"
    }, []);

    useEffect(() => {
        console.log(customersData.customers);
    }, [customersData.customers])

    const showInfo = data => {
        setShowPopup(true);
        setPopupData(data);
    }

    const handlePin = id => {
        var customer_item = document.getElementById("company" + id);
        customer_item.classList.toggle("active-company");

        setTimeout(() => {
            customer_item.classList.toggle("active-company");
        }, 1500);
    };

    return customersData.loading ? (
            <h2>Loading...</h2>
        ) : customersData.error ? (
            <h2>{customersData.error}</h2>
        ) : (
        <div id="customers-page">
            <MainSection>
                <div className="customers">
                    <div className="map-container">
                        <img src={map} alt="map" />
                        <div className="companies-pins">
                            {customersData && customersData.customers && customersData.customers.map(customer =>
                                <a href={"#company" + customer.id} key={customer.id}><div className="company-pin" onClick={() => handlePin(customer.id)} style={{ top: parseInt(customer.x_position, 10)+ '%', left:  parseInt(customer.y_position, 10) +'%' }}></div></a>
                            )}
                        </div>
                    </div>
                    <div className="companies-list">
                        {customersData && customersData.customers && customersData.customers.map(customer =>
                            <div id={"company" + customer.id} className="company-item" key={customer.id} onClick={() => showInfo(customer)}>
                                <img src={customer.logo} alt={customer.name} />
                                <h6>{customer.name}</h6>
                            </div>
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
            </MainSection>
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
)(Customers)
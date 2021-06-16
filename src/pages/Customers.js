import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import parse from 'html-react-parser'
import MainSection from '../components/MainSection'
import { fetchCustomers } from '../actions/customerAction'
import map from '../assets/img/map.png'

const Customers = ({ fetchCustomers, customersData }) => {
    // popup visibility 
    const [showPopup, setShowPopup] = useState(false);

    // popup data object
    const [popupData, setPopupData] = useState({});

    useEffect(() => {
        // get all customers/companies
        fetchCustomers();

        // set page title
        document.title = "Panda Navigation - Customers"
    }, []);

    const showInfo = data => {
        setShowPopup(true);
        setPopupData(data);
    }

    // show company on map location click
    const handlePin = id => {
        var customer_item = document.getElementById("company" + id);
        customer_item.classList.toggle("active-company");

        setTimeout(() => {
            customer_item.classList.toggle("active-company");
        }, 1500);
    };

    return customersData.loading ? (
        <div className="loader-container">
            <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    ) : customersData.error ? (
        <h2>{customersData.error}</h2>
    ) : (
        <div id="customers-page">
            <MainSection>
                <div className="customers">
                    {/* CUSTOMERS MAP */}
                    <div className="map-container">
                        <img src={map} alt="map" />
                        <div className="companies-pins">
                            {customersData && customersData.customers && customersData.customers.map(customer =>
                                <a href={"#company" + customer.id} key={customer.id}><div className="company-pin" onClick={() => handlePin(customer.id)} style={{ top: parseInt(customer.x_position, 10) + '%', left: parseInt(customer.y_position, 10) + '%' }}></div></a>
                            )}
                        </div>
                    </div>
                    {/* CUSTOMERS MAP */}

                    {/* CUSTOMERS LIST */}
                    <div className="companies-list">
                        {customersData && customersData.customers && customersData.customers.map(customer =>
                            <div id={"company" + customer.id} className="company-item" key={customer.id} onClick={() => showInfo(customer)}>
                                <img src={customer.logo} alt={customer.name} />
                                <h6>{customer.name}</h6>
                            </div>
                        )}
                    </div>
                    {/* CUSTOMERS LIST */}

                    {/* POPUP CARD */}
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
                                    <div className="info-text"> {parse(`${popupData.about}`)}</div>
                                </div>
                            </div>
                        </div>
                    </div>}
                    {/* POPUP CARD */}
                </div>
            </MainSection>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        // access state in a reducer
        customersData: state.customers
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // access action to fetch all customers
        fetchCustomers: () => dispatch(fetchCustomers())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Customers)
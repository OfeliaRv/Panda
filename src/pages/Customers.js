import map from '../assets/img/map.png'
import { useContext, useEffect } from 'react'
import { DataContext } from '../DataContext'
import MainSection from '../components/MainSection'
import { useSelector, useDispatch } from 'react-redux'

const Customers = () => {
    useEffect(() => {
        document.title = "Panda Navigation - Customers"
    }, [])

    // get add widgets
    const companies = useSelector(state => state.companies.companies);

    return (
        <div id="customers-page">
            <MainSection>
                <div className="customers">
                    <div className="map-container">
                        <img src={map} alt="map" />
                    </div>
                    <div className="companies-list">
                        {companies.map(company =>
                            <div className="company-item" key={company.id}>
                                {company.logo}
                                {/* <img src={company.logo} alt={company.name} /> */}
                                <h6>{company.name}</h6>
                            </div>
                        )}
                    </div>
                </div>
            </MainSection>
        </div>
    );
}

export default Customers;
import map from '../assets/img/map.png'
import { useContext, useEffect } from 'react'
import { DataContext } from '../DataContext'
import MainSection from '../components/MainSection'

const Customers = () => {
    const { companyData } = useContext(DataContext);
    const [companies] = companyData;

    useEffect(() => {
        document.title = "Panda Navigation - Customers"
    }, [])

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
                                <img src={company.logo} alt={company.name} />
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
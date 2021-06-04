import map from '../assets/img/map.png'
import { useEffect } from 'react'
import MainSection from '../components/MainSection'
import { useSelector } from 'react-redux'

const Customers = () => {
    useEffect(() => {
        document.title = "Panda Navigation - Customers"
    }, [])

    // get add widgets
    const companies = useSelector(state => state.companies.companies);

    const handlePin = (id) => {
        var company_item = document.getElementById("company" + id);
        company_item.classList.toggle("active-company"); 

        setTimeout(() => {
            company_item.classList.toggle("active-company"); 
        }, 1500);
    };

    return (
        <div id="customers-page">
            <MainSection>
                <div className="customers">
                    <div className="map-container">
                        <img src={map} alt="map" />
                        <div className="companies-pins">
                            {companies.map(company =>
                                <a href={"#company" + (companies.indexOf(company) + 1)} key={company.id}><div className="company-pin" onClick={() => handlePin(company.id)} style={{ top: company.x_pos, left: company.y_pos }}></div></a>
                            )}
                        </div>
                    </div>
                    <div className="companies-list">
                        {companies.map(company =>
                            <div id={"company" + company.id} className="company-item" key={company.id}>
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
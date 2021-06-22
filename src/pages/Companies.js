import Table from 'react-bootstrap/Table'
import { Link } from "react-router-dom"
import edit from '../assets/img/edit.svg'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import parse from 'html-react-parser'
import { fetchCompanies } from '../actions/CompanyAction'

const Companies = ({ fetchCompanies, companiesData }) => {
    useEffect(() => {
        fetchCompanies();
    }, []);

    return (
        <div className="dashboard" id="companies">
            <div className="dashboard-header">
                <h1>PANDA Companies list</h1>
                <Link to="/addcompany">
                    <div className="add-button">
                        <p>Add company</p>
                    </div>
                </Link>
            </div>
            <Table bordered responsive size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Comapany Name</th>
                        {/* <th>Comapany Info</th> */}
                        <th>X-position (%)</th>
                        <th>Y-position (%)</th>
                        <th>Company Logo</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                {companiesData.loading ? (
                    <h2>Loading</h2>
                ) : companiesData.error ? (
                    <h2>{companiesData.error}</h2>
                ) : companiesData.companies.length === 0 ? (
                    <h2>No data to display</h2>
                ) : (
                    <tbody>
                        {companiesData && companiesData.companies && companiesData.companies.map(company =>
                            <tr key={company.id}>
                                <td>{companiesData.companies.indexOf(company) + 1}</td>
                                <td>{company.name}</td>
                                {/* <td>{parse(`${company.about}`)}</td> */}
                                <td>{company.x_position}</td>
                                <td>{company.y_position}</td>
                                <td>{company.logo}</td>
                                <td className="actions">
                                    <Link to={"/editcompany/" + company.id}><img src={edit} alt="edit" title="Edit" /> </Link>
                                </td>
                            </tr>
                        )}
                    </tbody>
                )}
            </Table>
        </div>
    );
}


const mapStateToProps = state => {
    return {
        companiesData: state.companies
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchCompanies: () => dispatch(fetchCompanies())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Companies)

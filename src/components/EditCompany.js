import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { editCompany, fetchCompany, deleteCompany } from '../actions/CompanyAction'
import { connect } from 'react-redux'
import { useParams } from 'react-router'

const EditCompany = ({ fetchCompany, companiesData }) => {
    const { id } = useParams();
    const my_dispatch = useDispatch();
    const [data, setData] = useState({});

    useEffect(() => {
        fetchCompany(id);
    }, [])

    useEffect(() => {
        setData(companiesData.company);
    }, [companiesData.company])

    const edit = e => {
        e.preventDefault();
        var inputs = document.getElementsByClassName('input-item');
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].disabled = false;
        }

        var textfield = document.getElementsByClassName('tox-tinymce');
        if (textfield.nodeType == 1) {
            textfield.setAttribute("aria-disabled", false);
            textfield.classList.remove('tox-tinymce--disabled');
        }
    }

    return (
        <div className="add-component" id="add-company">
            <div className="add-component-heading">
                <h4>Edit Company</h4>
                <div className="heading-buttons">
                    <div className="add-button" onClick={edit}>Edit Company</div>
                    <div className="add-button" style={{ backgroundColor: '#e55d5d' }} onClick={() => my_dispatch(deleteCompany(id))}>Delete Company</div>
                </div>
            </div>
            <form className="add-form" onSubmit={() => my_dispatch(editCompany(id, data))}>
                <div className="add-form-inputs">
                    <div className="input-container">
                        <label htmlFor="company-name">Company name</label>
                        <input className="input-item" type="text" id="company-name" defaultValue={companiesData.company.name} onChange={e => setData(prevState => ({ ...prevState, name: e.target.value }))} required disabled />
                    </div>
                    <div className="input-container">
                        <label htmlFor="company-x-pos">Company X position</label>
                        <input className="input-item" type="text" id="company-x-pos" defaultValue={companiesData.company.x_position} onChange={e => setData(prevState => ({ ...prevState, x_position: e.target.value }))} required disabled />
                    </div>
                    <div className="input-container">
                        <label htmlFor="company-y-pos">Company Y position</label>
                        <input className="input-item" type="text" id="company-y-pos" defaultValue={companiesData.company.y_position} onChange={e => setData(prevState => ({ ...prevState, y_position: e.target.value }))} required disabled />
                    </div>
                    <div className="input-container">
                        <label htmlFor="company-image">Company image</label>
                        {companiesData.company.logo && <img id="edit-image" src={"../../img/" + companiesData.company.logo} alt={companiesData.company.name}></img>}
                        <input className="input-item" type="file" id="company-image" defaultValue={companiesData.company.logo} onChange={e => setData(prevState => ({ ...prevState, logo: e.target.value }))} disabled />
                    </div>
                </div>
                <div className="add-form-inputs">
                    <h5>Company content</h5>
                    {/* <Editor
                        apiKey="mvg3ckngqlx3wg04j15oifuabymhabh11i2h6rnbkx0po4cs"
                        initialValue="<p>current value</p>"
                        init={{
                            plugins: 'link image code',
                            toolbar: 'undo redo | bold italic | alignleft aligncenter alignright',

                        }
                        }
                        disabled={true}
                    /> */}
                    <textarea className="input-item" id="company-text" defaultValue={companiesData.company.about} onChange={e => setData(prevState => ({ ...prevState, about: e.target.value }))} placeholder="Enter text" disabled required ></textarea>
                </div>
                <button type="submit" className="add-button input-item" disabled>Update company</button>
            </form>
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
        fetchCompany: (id) => dispatch(fetchCompany(id))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditCompany)
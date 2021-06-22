import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { editCompany, fetchCompany, deleteCompany } from '../actions/CompanyAction'
import { connect } from 'react-redux'
import { useParams } from 'react-router'
import 'tinymce/tinymce'
import 'tinymce/icons/default'
import 'tinymce/themes/silver'
import 'tinymce/plugins/paste'
import 'tinymce/plugins/link'
import 'tinymce/plugins/image'
import 'tinymce/plugins/table'
import 'tinymce/skins/ui/oxide/skin.min.css'
import 'tinymce/skins/ui/oxide/content.min.css'
import 'tinymce/skins/content/default/content.min.css'
import { Editor } from '@tinymce/tinymce-react'

const EditCompany = ({ fetchCompany, companiesData }) => {
    const { id } = useParams();
    const my_dispatch = useDispatch();
    const [data, setData] = useState({});
    const [isEditorEnabled, setIsEditorEnabled] = useState(true);

    useEffect(() => {
        fetchCompany(id);
        var inputs = document.getElementsByClassName('input-item');
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].disabled = true;
        }
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
        setIsEditorEnabled(false);
    }

    const handleEditorChange = content => {
        setData(prevState => ({ ...prevState, about: content }))
    }

    return (
        <div className="add-component" id="add-company">
            <div className="add-component-heading">
                <h4>Edit Company</h4>
                <div className="heading-buttons">
                    <div className="add-button" onClick={edit}>Edit</div>
                    <div className="add-button" style={{ backgroundColor: '#e55d5d' }} onClick={() => my_dispatch(deleteCompany(id))}>Delete</div>
                </div>
            </div>
            <form className="add-form" onSubmit={() => my_dispatch(editCompany(id, data))}>
                <div className="add-form-inputs">
                    <div className="input-container">
                        <label htmlFor="company-name">Company name</label>
                        <input className="input-item" type="text" id="company-name" defaultValue={companiesData.company.name} onChange={e => setData(prevState => ({ ...prevState, name: e.target.value }))} required />
                    </div>
                    <div className="input-container">
                        <label htmlFor="company-x-pos">Company X position</label>
                        <input className="input-item" type="text" id="company-x-pos" defaultValue={companiesData.company.x_position} onChange={e => setData(prevState => ({ ...prevState, x_position: e.target.value }))} required />
                    </div>
                    <div className="input-container">
                        <label htmlFor="company-y-pos">Company Y position</label>
                        <input className="input-item" type="text" id="company-y-pos" defaultValue={companiesData.company.y_position} onChange={e => setData(prevState => ({ ...prevState, y_position: e.target.value }))} required />
                    </div>
                    <div className="input-container">
                        <label htmlFor="company-image">Company image</label>
                        {companiesData.company.logo && <img id="edit-image" src={"../../img/customers/" + companiesData.company.logo} alt={companiesData.company.name}></img>}
                        <input className="input-item" type="file" id="company-image" defaultValue={companiesData.company.logo} onChange={e => setData(prevState => ({ ...prevState, logo: e.target.value }))} />
                    </div>
                </div>
                <div className="add-form-inputs">
                    <h5>Company content</h5>
                    <Editor
                        initialValue={companiesData.company.about}
                        init={{
                            skin: false,
                            content_css: false,
                            height: 300,
                            menubar: false,
                            plugins: [
                                'link image',
                                'table paste',
                                'hr'
                            ],
                            toolbar:
                                'undo redo | formatselect | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help | hr'
                        }}
                        onEditorChange={handleEditorChange}
                        disabled={isEditorEnabled}
                        required={true}
                    />
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
        fetchCompany: id => dispatch(fetchCompany(id))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditCompany)
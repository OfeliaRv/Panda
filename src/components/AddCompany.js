import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addCompany } from '../actions/CompanyAction'

const AddCompany = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState({});

    return (
        <div className="add-component" id="add-company">
            <h4 className="add-component-heading">Add company</h4>
            <form className="add-form" onSubmit={() => dispatch(addCompany(data))}>
                <div className="add-form-inputs">
                    <div className="input-container">
                        <label htmlFor="company-name">Company name</label>
                        <input type="text" id="company-name" placeholder="Add company name" onChange={e => setData(prevState => ({ ...prevState, name: e.target.value }))} required />
                    </div>
                    <div className="input-container">
                        <label htmlFor="company-x-pos">Company X-position</label>
                        <input type="text" id="company-x-pos" placeholder="Add X-position" onChange={e => setData(prevState => ({ ...prevState, x_position: e.target.value }))} required />
                    </div>
                    <div className="input-container">
                        <label htmlFor="company-y-pos">Company Y-position</label>
                        <input type="text" id="company-y-pos" placeholder="Add Y-position" onChange={e => setData(prevState => ({ ...prevState, y_position: e.target.value }))} required />
                    </div>
                    <div className="input-container">
                        <label htmlFor="company-image">Add company image</label>
                        <input type="file" id="company-image" onChange={e => setData(prevState => ({ ...prevState, logo: e.target.files[0].name }))} required />
                    </div>
                    <textarea id="company-text" onChange={e => setData(prevState => ({ ...prevState, about: e.target.value }))} placeholder="Enter text" required ></textarea>
                </div>
                <button type="submit" className="add-button">Add company</button>
            </form>
        </div>
    );
}

export default AddCompany;
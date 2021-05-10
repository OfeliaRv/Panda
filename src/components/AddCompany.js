const AddCompany = () => {
    return (
        <div className="add-component" id="add-company">
            <h4 className="add-component-heading">Add company</h4>
            <form className="add-form" action="">
                <div className="add-form-inputs">
                    <div className="input-container">
                        <label htmlFor="company-name">Company name</label>
                        <input type="text" name="company-name" placeholder="Add company name" required />
                    </div>
                    <div className="input-container">
                        <label htmlFor="company-x-pos">Company X-position</label>
                        <input type="text" name="company-x-pos" placeholder="Add X-position" required />
                    </div>
                    <div className="input-container">
                        <label htmlFor="company-y-pos">Company Y-position</label>
                        <input type="text" name="company-y-pos" placeholder="Add Y-position" required />
                    </div>
                    <div className="input-container">
                        <label htmlFor="company-image">Add company image</label>
                        <input type="file" name="company-image" required />
                    </div>
                </div>
                <button type="submit" className="add-button">Add company</button>
            </form>
        </div>
    );
}

export default AddCompany;
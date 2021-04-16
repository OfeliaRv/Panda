import { Link } from "react-router-dom";

const PageHeading = () => {
    return (
        <section className="page-heading-holder">
            <div className="page-heading">
                <h1>Advanced solutions</h1>
                <h1>for safe and efficient air navigation</h1>
            </div>
            <div className="heading-buttons">
                <Link to="visuals"><p className="heading-button white-button">Explore Visuals</p></Link>
                <Link to="products"><p className="heading-button white-button">View Products</p></Link>
            </div>
        </section>
    );
}

export default PageHeading;

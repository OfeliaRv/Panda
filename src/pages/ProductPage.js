import { DataContext } from '../DataContext'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import MainSection from '../components/Home/MainSection';

const ProductPage = () => {
    const { productData } = useContext(DataContext);
    const [products] = productData;

    const { id } = useParams();
    return (
        <div id="products">
            <MainSection>
                <div className="product-container col-md-12 col-lg-12">
                    <div className="main-heading">
                        <h1>{products[id].name}</h1>
                    </div>
                    <div className="product-content col-md-12 col-lg-12">
                        <div className="product-img">
                            <img src={products[id].img} alt={'product' + id} />
                        </div>
                        <div className="product-text">
                            <p>
                                Fully integrated Software System assisting procedure designer in creating flight procedures compatible with international safety requirements, by monitoring designer's actions, generating optimal recommendations and supplying documented reports.
                                PANS-OPS Master capable of proposing non-obvious optimal solutions to procedure designer even on the worst aeronautical conditions and preventing from going beyond the best innovative criteria in air navigation.
                                Automated Software System for flight procedure design with unique analytical decision-making ability and computer intelligence.
                                System for procedure designers at any proficiency level: Because of its clear-cut, user-friendly interface and an inbuilt analytical capability, PANDA can serve as a teaching tool for beginners up to the high-competence level.
                            </p>
                            <h6>Quality Assurance</h6>
                            <p>PANDA comprises following operational mechanisms for safety assurance and quality control:</p>
                            <ul>
                                <li>– Ensuring the integrity of source aeronautical data used in procedure design.</li>
                                <li>– Generating non-contradictory solutions and recommendations to assist the designer in making reasonable decisions at each design phase.</li>
                                <li>– Full automation of geometric construction of nominal trajectories and protection areas without any manual interference.</li>
                                <li>– Control the accuracy of the results drawn by the system.</li>
                                <li>– Storing procedure forming parameters, appropriate PANSOPS criteria and acquired results .</li>
                                <li>– Automatic generation of reports and supporting documentations of entire design process.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </MainSection>
        </div>
    );
}

export default ProductPage;
import MainSection from "../components/Home/MainSection"
import PageHeading from "../components/PageHeading"
import Widgets from '../components/Home/Widgets'
import { DataContext } from '../DataContext'
import { useContext } from 'react'
import NewsLine from "../components/Home/NewsLine"
import ContactForm from "../components/Home/ContactForm"

const Home = () => {
    const { homePageData } = useContext(DataContext);
    const [home] = homePageData;

    return (
        <div>
            <PageHeading />
            <MainSection>
                {home[0].clicked &&
                    <div>
                        <div className="main-heading">
                            <h1>Customers</h1>
                        </div>
                        <div className="page-content">
                            <Widgets />
                        </div>
                        <div className="space"></div>
                    </div>}
                {home[1].clicked &&
                    <div>
                        <div className="main-heading">
                            <h1>News</h1>
                        </div>
                        <div className="page-content">
                            <NewsLine />
                        </div>
                    </div>}
                {home[2].clicked &&
                    <div>
                        <div className="main-heading" style={{ marginLeft: '70px' }}>
                            <h1>Get in touch</h1>
                        </div>
                        <div className="page-content">
                            <ContactForm />
                        </div>
                    </div>}
            </MainSection>
        </div>
    );
}

export default Home;
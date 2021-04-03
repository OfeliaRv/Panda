import React from 'react'
import MainSection from "../components/MainSection/MainSection"
import PageHeading from "../components/PageHeading"
import Widgets from '../components/MainSection/Widgets'

const Home = () => {
    return (
        <div>
            <PageHeading />
            <MainSection>
                <div className="main-heading">
                    <h1>Customers</h1>
                </div>
                <div className="page-widgets">
                    <Widgets />
                </div>
            </MainSection>
        </div>
    );
}

export default Home;
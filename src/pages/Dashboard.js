import Layout from "../components/layout/Layout"
import { Route } from "react-router"
import Auth from "./Auth"
import News from "./News"
import AddNews from "../components/AddNews"
import Products from "./Products"
import AddProduct from "../components/AddProduct"
import Reviews from "./Reviews"
import AddReview from "../components/AddReview"
import Requests from "./Requests"
import Messages from "./Messages"
import Companies from "./Companies"
import AddCompany from "../components/AddCompany"
import EditNews from "../components/EditNews"

const Dashboard = () => {
    // if (user === null || user === undefined) {
    //     return (
    //         <Auth />
    //     )
    // }
    // else {
    return (
        <Layout>
            <Route exact path="/" component={News} />
            <Route path="/news" component={News} />
            <Route path="/addnews" component={AddNews} />
            <Route path="/editnews/:id" component={EditNews} />
            <Route path="/products" component={Products} />
            <Route path="/addproduct" component={AddProduct} />
            <Route path="/reviews" component={Reviews} />
            <Route path="/addreview" component={AddReview} />
            <Route path="/requests" component={Requests} />
            <Route path="/messages" component={Messages} />
            <Route path="/companies" component={Companies} />
            <Route path="/addcompany" component={AddCompany} />
        </Layout>
    );
    // }
}

export default Dashboard;
import { Route } from "react-router"
import Layout from "../components/layout/Layout"
import News from "./News"
import AddNews from "../components/AddNews"
import Products from "./Products"
import AddProduct from "../components/AddProduct"
import Reviews from './Reviews'
import AddReview from "../components/AddReview"
import Messages from "./Messages"
import Companies from "./Companies"
import AddCompany from "../components/AddCompany"
import EditNews from "../components/EditNews"
import EditCompany from "../components/EditCompany"
import EditReview from "../components/EditReview"
import EditProduct from "../components/EditProduct"
import AuthRequests from "./AuthRequests"
import Forum from "./Forum"
import ForumResponses from "./ForumResponses"

const Dashboard = () => {
    return (
        <Layout>
            <Route exact path="/" component={News} />
            <Route exact path="/news" component={News} />
            <Route path="/addnews" component={AddNews} />
            <Route exact path="/editnews/:id" component={EditNews} />
            <Route path="/products" component={Products} />
            <Route path="/addproduct" component={AddProduct} />
            <Route exact path="/editproduct/:id" component={EditProduct} />
            <Route path="/reviews" component={Reviews} />
            <Route path="/addreview" component={AddReview} />
            <Route exact path="/editreview/:id" component={EditReview} />
            <Route path="/messages" component={Messages} />
            <Route path="/companies" component={Companies} />
            <Route path="/addcompany" component={AddCompany} />
            <Route exact path="/editcompany/:id" component={EditCompany} />
            <Route exact path="/forum-topics" component={Forum} />
            <Route exact path="/forum-topics/:id/responses" component={ForumResponses} />
        </Layout>
    );
}

export default Dashboard;
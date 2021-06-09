import Layout from "../components/layout/Layout"
import { Route } from "react-router"
import Auth from "./Auth"
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
import TopicRequests from "./TopicRequests"
import { connect } from 'react-redux'
import { useEffect } from 'react'

const Dashboard = ({ userData }) => {
    useEffect(() => {
        // fetchUser();
        console.log(userData.user);
    }, []);

    // if (userData === undefined) {
    //     return (
    //         <Route exact path="/" component={Auth} />
    //     )
    // }
    // else {
    return (
        <Layout>
            <Route exact path="/" component={News} />
            <Route path="/addnews" component={AddNews} />
            <Route exact path="/editnews/:id" component={EditNews} />
            <Route path="/products" component={Products} />
            <Route path="/addproduct" component={AddProduct} />
            <Route exact path="/editproduct/:id" component={EditProduct} />
            <Route path="/reviews" component={Reviews} />
            <Route path="/addreview" component={AddReview} />
            <Route exact path="/editreview/:id" component={EditReview} />
            <Route path="/auth-requests" component={AuthRequests} />
            <Route path="/topic-requests" component={TopicRequests} />
            <Route path="/messages" component={Messages} />
            <Route path="/companies" component={Companies} />
            <Route path="/addcompany" component={AddCompany} />
            <Route exact path="/editcompany/:id" component={EditCompany} />
        </Layout>
    );
    // }
}

const mapStateToProps = state => {
    return {
        userData: state.auth
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//         fetchUser: () => dispatch(fetchUser())
//     }
// }

export default connect(
    mapStateToProps //,
    // mapDispatchToProps
)(Dashboard)
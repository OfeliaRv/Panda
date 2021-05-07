import Layout from "../components/layout/Layout"
import { DataContext } from '../DataContext'
import { useContext } from 'react'
import { Route } from "react-router"
import Auth from "./Auth"
import News from "./News"
import AddNews from "../components/AddNews"
import Products from "./Products"
import AddProduct from "../components/AddProduct"

const Dashboard = () => {
    // const { currentUser } = useContext(DataContext);
    // const [user, setUser] = currentUser;

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
            <Route path="/products" component={Products} />
            <Route path="/addproduct" component={AddProduct} />
        </Layout>
    );
    // }
}

export default Dashboard;
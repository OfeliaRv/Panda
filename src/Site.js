import Layout from './components/layout/Layout'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductPage from './pages/ProductPage'
import Customers from './pages/Customers'
import News from './pages/News'
import Reviews from './pages/Reviews'
import Forum from './pages/Forum'
import Contacts from './pages/Contacts'
import { createBrowserHistory } from 'history';
const history = createBrowserHistory({ forceRefresh: true });

const Site = () => {
    return (
        <Router history={history}>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/products" component={Products} />
                    <Route path="/products/:id" component={ProductPage} />
                    <Route path="/customers" component={Customers} />
                    <Route path="/reviews" component={Reviews} />
                    <Route path="/news" component={News} />
                    <Route path="/contacts" component={Contacts} />
                    <Route path="/forum" component={Forum} />
                    <Route path="*">
                        <div style={{ height: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                            <h1 style={{ textAlign: 'center', color: '#6D7587' }}>PAGE NOT FOUND</h1>
                        </div>
                    </Route>
                </Switch>
            </Layout>
        </Router>
    );
}

export default Site;
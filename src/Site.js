import Layout from './components/layout/Layout'
import { Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductPage from './pages/ProductPage'
import Customers from './pages/Customers'
import News from './pages/News'
import Reviews from './pages/Reviews'
import Forum from './pages/Forum'
import Contacts from './pages/Contacts'
import { createBrowserHistory } from 'history';
import StartTopic from './pages/StartTopic'
import ForumPage from './pages/ForumPage'
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
                    <Route exact path="/news" component={News} />
                    <Route path="/news/:id" component={News} />
                    <Route path="/contacts" component={Contacts} />
                    {/* <Route exact path="/forum" component={Forum} />
                    <Route path="/forum/:id" component={ForumPage} />
                    <Route path="/starttopic" component={StartTopic} /> */}
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
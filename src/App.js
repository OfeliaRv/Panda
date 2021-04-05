import { DataProvider } from './DataContext'
import Layout from './components/layout/Layout'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductPage from './pages/ProductPage'

const App = () => {
    return (
        <DataProvider>
            <Router>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/products" component={Products} />
                        <Route exact path="/products/:id" component={ProductPage} />
                        <Route path="*">
                            <div style={{ height: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <h1 style={{ textAlign: 'center', color: '#6D7587' }}>PAGE NOT FOUND</h1>
                            </div>
                        </Route>
                    </Switch>
                </Layout>
            </Router>
        </DataProvider>
    );
}

export default App;

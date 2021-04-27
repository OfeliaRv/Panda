import { DataProvider } from './DataContext'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { createBrowserHistory } from 'history';
import Auth from './Auth'
import Site from './Site';
const history = createBrowserHistory({ forceRefresh: true });

const App = () => {
    return (
        <DataProvider>
            <Router history={history}>
                <Switch>
                    <Route exact path="/" component={Site} />
                    <Route path="/login" component={Auth} />
                    <Route path="*">
                        <div style={{ height: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                            <h1 style={{ textAlign: 'center', color: '#6D7587' }}>PAGE NOT FOUND</h1>
                            <Link to="/"><p style={{color:'#4d545e'}}>Go to Homepage</p></Link>
                        </div>
                    </Route>
                </Switch>
            </Router>
        </DataProvider>
    );
}

export default App;

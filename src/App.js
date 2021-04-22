import Layout from './components/layout/Layout'
import { DataProvider } from './DataContext'

const App = () => {
  return (
    <DataProvider>
      <div className="App">
        <Layout></Layout>
      </div>
    </DataProvider>
  );
}

export default App;
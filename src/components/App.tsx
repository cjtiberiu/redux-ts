import { Provider } from 'react-redux';
import { store } from '../redux';
import RepositoriesList from './RepositoriesList';
import './App.css';

const App = () => {

    return (
        <Provider store={store}>
            <div style={{ textAlign: 'center'}}>
                <h1>Search npm packages</h1>
                <RepositoriesList />
            </div>
        </Provider>
    )
};

export default App;
import {createStore, combineReducers} from 'redux';
import formReducer from '../reducers/form';

//store creation
export default () => {
    const store = createStore(
        combineReducers({
            form: formReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;

}

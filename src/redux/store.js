import {applyMiddleware, combineReducers, createStore} from 'redux'
import {countryNameReducer} from "./countryName-reducer";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';





const reducers = combineReducers({
 countries: countryNameReducer,
});

export const store = createStore(reducers,composeWithDevTools(applyMiddleware(thunk)));


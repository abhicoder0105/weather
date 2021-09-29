import {combineReducers} from 'redux';
import { weatherReducer, selectedWeatherReducer} from './weatherReducer';
import { userReducer, findUserReducer} from './userReducers';


const reducers = combineReducers({
    allWeathers: weatherReducer,
    weather: selectedWeatherReducer,
    allUsers: userReducer, 
    user: findUserReducer,
});


export default reducers;
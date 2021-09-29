import { ActionTypes } from "../constants/action-types"

export const setWeather = (weathers) =>{
    return {
        type: ActionTypes.SET_WEATHERS,
        payload: weathers,
    };
};

export const selecedtWeather = (weather) =>{
    return{
        type: ActionTypes.SELECTED_WEATHER,
        payload: weather,
    }
}

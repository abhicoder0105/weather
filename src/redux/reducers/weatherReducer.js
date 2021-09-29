import { ActionTypes } from "../constants/action-types";

const initialState = {
  weathers: [
     

  ],
};

export const weatherReducer = (state=initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_WEATHERS:
      return {...state, weathers: payload};

    default:
      return state;
  }
};

export const selectedWeatherReducer = (state={}, {type, payload}) => {
    switch(type) {
        case ActionTypes.SELECTED_WEATHER:
            return { ...state, ...payload};
    default:
        return state;
    
        }   
}
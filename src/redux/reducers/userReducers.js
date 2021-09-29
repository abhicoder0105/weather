import { ActionTypes } from "../constants/action-types";

const initialState = {
  users: [
     

  ],
};

export const userReducer = (state=initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_USER:
      return {...state, users: payload};
    default:
      return state;
  }
};



export const findUserReducer = (state={}, {type, payload}) => {
    switch(type) {
        case ActionTypes.FIND_USER:
            return { ...state, ...payload};
    default:
        return state;
    
        }   
}
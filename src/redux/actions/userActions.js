import { ActionTypes } from "../constants/action-types"

export const setUser = (user) =>{
    return {
        type: ActionTypes.SET_USER,
        payload: user,
    };
};

export const findUser = (user) =>{
    return{
        type: ActionTypes.FIND_USER,
        payload: user,
    }
}

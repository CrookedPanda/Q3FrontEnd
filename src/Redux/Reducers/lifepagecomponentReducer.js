import { ActionTypes } from "../Contants/action-types";

const initialState = {
    components:[]
}

export const componentReducer =  (state= initialState, {type,payload}) =>{
    switch(type) {
        case ActionTypes.GET_COMPONENTS:
            return {...state,lifepageComponents: payload}
        default:
            return state;
    }
}

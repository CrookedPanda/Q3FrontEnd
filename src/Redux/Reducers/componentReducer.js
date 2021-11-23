import { ActionTypes } from "../Contants/action-types";

const initialState = {
    components:[]
}

export const componentReducer =  (state= initialState, {type,payload}) =>{
    switch(type) {
        case ActionTypes.GET_COMPONENT:
            return {...state,components: payload}
        default:
            return state;
    }
}

export const selectedComponentReducer = (state ={}, {type,payload}) => {
    switch (type) {
        case ActionTypes.SELECTED_COMPONENT:
                return {...state,...payload}
        default:
            return state;
    }
}

import { ActionTypes } from "../Contants/action-types"

const initialState = {
    machines:[]
}

export const machineReducer = (state = initialState,{type,payload}) => {
    switch (type) {
        case ActionTypes.GET_MACHINES:
            return {...state, machines: payload};
        default:
            return state;
    }
}

export const selectedMachineReducer = (state ={}, {type,payload}) => {
    switch (type) {
        case ActionTypes.SELECTED_MACHINE:
                return {...state,...payload}
        default:
            return state;
    }
}
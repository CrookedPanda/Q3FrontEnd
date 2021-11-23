import { ActionTypes } from "../Contants/action-types";


export const setComponents = (components) => {
    return {
        type: ActionTypes.GET_COMPONENTS,
        payload: components,
    }
}

export const selectedComponent = (component) => {
    return {
        type: ActionTypes.SELECTED_COMPONENT,
        payload: component,
    };
};
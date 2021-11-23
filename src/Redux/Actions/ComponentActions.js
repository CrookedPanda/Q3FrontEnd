import { ActionTypes } from "../Contants/action-types";


export const setcomponents = (components) => {
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
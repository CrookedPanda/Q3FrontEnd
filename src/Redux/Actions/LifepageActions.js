import { ActionTypes } from "../Contants/action-types";


export const setComponents = (lifepageComponents) => {
    return {
        type: ActionTypes.GET_COMPONENTS,
        payload: lifepageComponents,
    }
};
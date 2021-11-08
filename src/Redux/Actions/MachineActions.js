import { ActionTypes } from "../Contants/action-types";

export const setMachines = (machines) => {
    return {
        type:ActionTypes.GET_MACHINES,
        payload: machines,
    };
};

export const selectedMachine = (machine) => {
    return {
        type: ActionTypes.SELECTED_MACHINE,
        payload: machine,
    };
};
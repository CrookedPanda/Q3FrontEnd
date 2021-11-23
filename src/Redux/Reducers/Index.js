import { combineReducers } from "redux";
import { machineReducer, selectedMachineReducer } from "./machineReducer";

const reducers = combineReducers({
    allMachines: machineReducer,
    machine: selectedMachineReducer
});

export default reducers
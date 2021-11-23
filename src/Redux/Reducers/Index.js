import { combineReducers } from "redux";
import { machineReducer, selectedMachineReducer } from "./machineReducer";
import { componentReducer,selectedComponentReducer } from "./componentReducer";

const reducers = combineReducers({
    allMachines: machineReducer,
    machine: selectedMachineReducer,
    allcomponents: componentReducer,
    component:selectedComponentReducer
});

export default reducers
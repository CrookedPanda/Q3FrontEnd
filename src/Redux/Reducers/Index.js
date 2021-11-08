import { combineReducers } from "redux";
import { machineReducer } from "./machineReducer";

const reducers = combineReducers({
    allMachines: machineReducer,
});

export default reducers
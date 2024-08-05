
import { combineReducers } from "redux";
import * as redux from "redux";
import {todoReducer} from "./reducers/todoReducer";
import { NoteReducer } from "./reducers/NoteReducer";


const result=combineReducers({
   todoReducer,
    NoteReducer
})

export const store = redux.createStore(result);


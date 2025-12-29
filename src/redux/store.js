import { createStore, combineReducers } from "redux";
import projectReducer from "./reducers/projectReducer";
import taskReducer from "./reducers/taskReducer";

const rootReducer = combineReducers({
  projects: projectReducer,
  tasks: taskReducer,
});

// 🔥 Load from localStorage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem("reduxState");
    if (!serializedState) return undefined;
    return JSON.parse(serializedState);
  } catch {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    localStorage.setItem("reduxState", JSON.stringify(state));
  } catch {}
};

const persistedState = loadState();

export const store = createStore(
  rootReducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);

// 🔥 Save on every change
store.subscribe(() => {
  saveState(store.getState());
});

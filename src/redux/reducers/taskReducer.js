import { ADD_TASK, TOGGLE_TASK, DELETE_TASK } from '../actions/taskActions';

const initialState = { tasks: [] };

export default function taskReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };
    case TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map(t => t.id === action.payload ? {...t, completed: !t.completed} : t)
      };
    case DELETE_TASK:
      return { ...state, tasks: state.tasks.filter(t => t.id !== action.payload) };
    default:
      return state;
  }
}

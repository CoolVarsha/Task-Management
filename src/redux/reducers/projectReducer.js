import { ADD_PROJECT, DELETE_PROJECT } from '../actions/projectActions';

const initialState = { projects: [] };

export default function projectReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_PROJECT:
      return { ...state, projects: [...state.projects, action.payload] };
    case DELETE_PROJECT:
      return { ...state, projects: state.projects.filter(p => p.id !== action.payload) };
    default:
      return state;
  }
}

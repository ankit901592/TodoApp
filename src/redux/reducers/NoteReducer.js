import { ADD_NOTES, DELETENOTES } from "../actions/noteAction";

const initialState = {
  notes: [],
};

export function NoteReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NOTES:
      return {
        ...state,
        notes: [
          ...state.notes,
          {
            text: action.text,
            createdOn: new Date(),
          },
        ],
      };
    case DELETENOTES:
      return {
        ...state,
        notes: state.notes.filter((_, index) => index !== action.index),
      };
    default:
      return state;
  }
}

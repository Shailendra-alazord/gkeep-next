import {useReducer} from 'react'; // @ts-ignore

// @ts-ignore
function noteListReducer(state: any, { type, payload, ...action }) {
  let newState = [...state];
  switch (type) {
    case 'add-note':
      newState = [payload, ...state];
      break;
    case 'remove-note':
      newState = state.filter((note: any) => {
        return note.id !== payload.id;
      });
      break;
    case 'toggle-pin':
      newState = state.map((note: any) => {
        return note.id === payload.id ? { ...note, pinned: !note.pinned } : note;
      });
      break;
    case 'change-color':
      newState = state.map((note: any) => {
        return note.id === payload.id ? { ...note, backgroundColor: payload.backgroundColor } : note;
      });
      break;
    default:
      throw new Error('Error in dispatch function');
  }
  localStorage.setItem('noteList', JSON.stringify(newState));
  console.log('note action performed', newState);
  return newState;
}

export default function useNoteList() {
  // @ts-ignore
  const [state, dispatch] = useReducer(noteListReducer, JSON.parse(localStorage.getItem('noteList')) ?? []);
  console.log('note list initialised', state);
  return { state, dispatch };
}

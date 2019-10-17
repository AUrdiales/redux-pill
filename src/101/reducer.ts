import { INCREMENT, DECREMENT, RESET, ADD_NUMBER } from "./action";

export function rootReducer(state, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1
      };

    case DECREMENT:
      return {
        ...state,
        counter: state.counter - 1
      };

    case RESET:
      return {
        ...state,
        counter: 0
      };
    case ADD_NUMBER:
      return {
        ...state,
        number: action.payload.number
      };
    default:
      return state;
  }
}

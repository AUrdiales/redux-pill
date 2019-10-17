export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const RESET = "RESET";
export const ADD_NUMBER = "ADD_NUMBER";

export function incrementCounter() {
  return {
    type: INCREMENT
  };
}

export function decrementCounter() {
  return {
    type: DECREMENT
  };
}

export function reset() {
  return {
    type: RESET
  };
}

export function addNumber(number) {
  return {
    type: ADD_NUMBER,
    payload: {
      number
    }
  };
}

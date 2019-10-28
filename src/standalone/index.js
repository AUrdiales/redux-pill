const store = Redux.createStore(reducer);
const elements = [
  { type: "p", text: "Welcome to Redux Standalone" },
  {
    type: "p",
    id: "redux_target",
    text: store.getState().counter
  },
  { type: "button", text: "increment", id: "increment_number" },
  { type: "button", text: "decrement", id: "decrement_number" },
  { type: "button", text: "reset", id: "reset_number" }
];
for (let element of elements) {
  generateNode(element.type, element.text, element.id, element.secret);
}

document.querySelector("#increment_number").addEventListener("click", event => {
  store.dispatch({ type: "INCREMENT" });
  updateNode(document.querySelector("#redux_target"), store.getState().counter);
});
document.querySelector("#decrement_number").addEventListener("click", event => {
  store.dispatch({ type: "DECREMENT" });
  updateNode(document.querySelector("#redux_target"), store.getState().counter);
});
document.querySelector("#reset_number").addEventListener("click", event => {
  store.dispatch({ type: "RESET" });
  updateNode(document.querySelector("#redux_target"), store.getState().counter);
});

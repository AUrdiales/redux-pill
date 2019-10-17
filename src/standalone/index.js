const store = Redux.createStore(reducer);
const elements = [
  { type: "p", text: "Welcome to Redux Standalone" },
  { type: "p", text: "Here is a simple example of" },
  {
    type: "div",
    id: "redux_target",
    text: store.getState().counter
  }
];

for (let element of elements) {
  generateNode(element.type, element.text, element.id);
}

generateNode("button", "increment", "increment_number");
generateNode("button", "decrement", "decrement_number");
generateNode("button", "reset", "reset_number");
document
  .querySelectorAll("button[id*=number]")
  .forEach(element => element.setAttribute("style", "margin: 10px;"));
document.querySelector("#increment_number").addEventListener("click", event => {
  store.dispatch({ type: "INCREMENT" });
  updateNode(document.querySelector("#redux_target"), store.getState().counter);
  console.log(event);
});
document.querySelector("#decrement_number").addEventListener("click", event => {
  store.dispatch({ type: "DECREMENT" });
  updateNode(document.querySelector("#redux_target"), store.getState().counter);
  console.log(event);
});
document.querySelector("#reset_number").addEventListener("click", event => {
  store.dispatch({ type: "RESET" });
  updateNode(document.querySelector("#redux_target"), store.getState().counter);
  console.log(event);
});

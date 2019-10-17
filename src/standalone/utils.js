function generateNode(type, text, id) {
  const main = document.querySelector("#root");
  const node = document.createElement(type);
  node.innerText = text;
  if (id) node.id = id;
  main ? main.appendChild(node) : console.log("Main node not found!");
}
function addEventToNode(id, callback) {
  const node = document.querySelector(`#${id}`);
  node.addEventListener(callback);
}

function updateNode(node, value) {
  node.innerText = value;
}

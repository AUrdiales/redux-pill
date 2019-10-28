function generateParagraph(node, text) {
  node.innerText = text;
}
function generateInput(node, secret) {
  node.setAttribute("style", "margin: 10px;");
  node.className = "col l3";
  if (secret) node.type = "password";
}
function generateButton(node, text) {
  node.innerText = text;
  node.className = "waves-effect waves-light btn-small col l3";
  node.setAttribute("style", "margin: 10px;");
}

function generateNode(type, text, id, secret) {
  const main = document.querySelector("#root");
  const node = document.createElement(type);
  if (id) node.id = id;
  switch (type) {
    case "p":
      generateParagraph(node, text);
      break;
    case "button":
      generateButton(node, text);
      break;
    case "input":
      generateInput(node, secret);
      break;
    default:
      break;
  }

  main ? main.appendChild(node) : console.log("Main node not found!");
}

function addEventToNode(id, callback) {
  const node = document.querySelector(`#${id}`);
  node.addEventListener(callback);
}

function updateNode(node, value) {
  node.innerText = value;
}

// in function customRender we insert every value one by one in our domelement because hme render karana h html file mai

// function customRender(reactElement, container) {
//   const domelement = document.createElement(reactElement.type);
//   domelement.innerHTML = reactElement.children; // is code mai ye problem h ki hme ek ek attribute ko deal krna pad raha h aur jyada attribute aayenge to problem hogi so hum kuch loop wala concept use krenge
//   domelement.setAttribute("href", reactElement.props.href);
//   domelement.setAttribute("target", reactElement.props.target);

//   container.appendChild(domelement);
// }

function customRender(reactElement, container) {
  const domelement = document.createElement(reactElement.type);
  domelement.innerHTML = reactElement.children;
  for (const prop in reactElement.props) {
    if (prop == "children") continue;
    domelement.setAttribute(prop, reactElement.props[prop]);
  }
  container.appendChild(domelement);
}

// in the lower line first we decribe every thing
const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit google",
};
const mainContainer = document.querySelector("#root"); // root ko target kiye h because hme root ko render karana h
customRender(reactElement, mainContainer); // function upr banaya h hmne

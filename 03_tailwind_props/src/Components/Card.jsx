import React from "react";

// function Card(props) {
//   console.log(props.username); // ye username <Card username="anurag"/> yeaha se aa raha h jo app.js mai h
//   return <div>Card</div>;
// }
function Card({ username }) {
  // yeha hum destructure kreke sheedha use kr lete h
  return <div>Card : {username}</div>; // isse value change ho jayegi har card mai
}

export default Card;

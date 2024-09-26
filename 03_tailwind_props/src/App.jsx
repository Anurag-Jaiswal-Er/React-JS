import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./Components/Card";

function App() {
  // basically yeha hum ek object le rahai h props mai jo hmare Card.js mai console ho raha h broweser mai jake dekehenge to ye out put aayega pura object
  let obj = {
    username: "anurag",
    age: 22,
  };
  let newarry = [1, 2, 3, 4, 5]; // array bhi props mai jata h
  return (
    <>
      <h1 className="bg-green-400 text-black rounded-xl">Tailwind Test</h1>
      <Card showobjc={obj} username="anurag" />
      <Card newObj={obj.username} username="ragni" />
      <Card newArray={newarry} username="Ravi" />
    </>
  );
}

export default App;

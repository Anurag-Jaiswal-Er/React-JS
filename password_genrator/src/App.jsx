import { useCallback, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numallow, setNumallow] = useState(false);
  const [charallow, setCharallow] = useState(false);
  const [password, setPassword] = useState("");

  // password generator banayenge ab
  const PasswordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numallow) str += "0123456789";
    if (charallow) str += "!@#$%&*";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
    }
  }, [length, numallow, charallow, setPassword]); // []=> dependency
  return (
    <>
      <h1 className="text-4xl text-center text-white">Password Genretor</h1>
    </>
  );
}

export default App;

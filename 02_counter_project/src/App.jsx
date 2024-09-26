import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [Counter, setCounter] = useState(1);
  // let Counter = 1;
  const addvalue = () => {
    // console.log("clicked", Counter); // isse console pe counter increase ho raha h but page pe value render ni ho ri h kuch to problem h is problem ko solve krne ke liye react mai hooks aaya useState hooks ke through problem solve ho jayega koi refecrence ni lena hota h libary apne aap sb kam kr leta h javascript mai reference lena padta
    // Counter+=1;
    if (Counter < 20) setCounter(Counter + 1);
  };
  const decreasevalue = () => {
    if (Counter >= 1) setCounter(Counter - 1);
  };
  return (
    <>
      <h1>Desi Code aur React</h1>
      <h2>Counter value : {Counter}</h2>
      <button onClick={addvalue}>Up</button>
      <br />
      <button onClick={decreasevalue}>Down</button>
    </>
  );
}
export default App;

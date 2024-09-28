import { useState } from "react";
import "./App.css";
import UseCurrencyInfo from "./Hooks/UseCurrencyInfo";
import Input from "./Components/Input";
function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const currencyInfo = UseCurrencyInfo(from);
  const option = Object.keys(currencyInfo);
  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };
  return (
    <>
      <Input />
    </>
  );
}

export default App;

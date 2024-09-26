import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numallow, setNumallow] = useState(false);
  const [charallow, setCharallow] = useState(false);
  const [password, setPassword] = useState("");

  // useref hook
  const passwordef = useRef(null); // intial mai value null h hme kisi ka bhi refecence ni chahiye start mai
  // password generator banayenge ab
  const PasswordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numallow) str += "0123456789";
    if (charallow) str += "!@#$%&*";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numallow, charallow, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordef.current?.select();
    passwordef.current?.setSelectionRange(0, 20);
    // window ke andar navigator hota h uske andar clipboard hota h phir useke andar writeText hota h
    window.navigator.clipboard.writeText(password);
  }, [password]); // ye optimzation ke liye h yeha copy kewal password pe hi depend h jysai password change hoga humar copy clipboard bhi change ho jayega

  // []=> dependency
  // without setPassword ke bhi run ho jata pr setPassword ke code optimize ho gya because hum usecallback() use kiye h optimization ke liye ye value ko cache mai rkhta h

  useEffect(() => {
    // bina use effect ke hum passwordGenerator function ko run krete to wo error de raha tha
    PasswordGenerator();
  }, [length, numallow, charallow, PasswordGenerator]);
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800 py-3 ">
        <h1 className=" mb-3 text-3xl text-center text-white">
          Password Genretor
        </h1>
        <br />
        <p className="mb-3 text-lg text-center text-white">
          Copy maximum lenght of Password is 20
        </p>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passwordef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className=" rounded-sm outline-none hover:bg-violet-600  bg-blue-700 text-white px-3 py-0.5 shrink-0 "
          >
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label htmlFor="lenght"> Length : {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numallow}
              id="numberInput"
              onChange={() => {
                setNumallow((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charallow}
              id="charallow"
              onChange={() => {
                setCharallow((prev) => !prev); // isse hum check aur unchek kr skte h box se
              }}
            />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

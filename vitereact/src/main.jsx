import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// ye bhi ek function hi to h App() jo render ho raha h

function MyApp() {
  return (
    <div>
      <h1>Anurag Jaiswal</h1>
    </div>
  );
}
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> isko hta ke hum apna function chala ke dekthe h kya aata h  */}
    <MyApp />
    {/* output aa raha h iska mtlb ki ye kam kr raha h basically ye bhi ek function hi h App() function ki trh jo App.js mai h  */}
  </StrictMode>
);

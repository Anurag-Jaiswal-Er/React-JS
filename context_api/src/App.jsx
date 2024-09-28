import Login from "./Components/Login";
import Profile from "./Components/Profile";
import UserContextProvider from "./Context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <h1 className=" p-4 m-4 text-3xl text-center bg-gray-700 text-white">
        Now Started
      </h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;

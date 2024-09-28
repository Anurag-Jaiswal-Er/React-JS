import React from "react";
import { useContext } from "react";
import UserContext from "../Context/UserContext";
function Profile() {
  const { user } = useContext(UserContext); // yeha user liye h kyoki yeah data fetch kran h login mai data dalna tha to waha hum setuser liye thai useContext mai
  if (!user) return <div>Please Login</div>;

  return <>Welcome: {user.username}</>;
}

export default Profile;

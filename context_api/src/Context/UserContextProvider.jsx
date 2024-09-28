import React, { useState } from "react";
import UserContext from "./UserContext"; // user context ko bhi lana padega

// ab hme a provider banana padega

const UserContextProvider = ({ children }) => {
  // children ek genric name h bs jo bhi aapke pass aa raha h use aage pass kr do
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {/* yeha hm value ke andar object diye h because hum jitne chahe utne value ka access de skte h */}
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;

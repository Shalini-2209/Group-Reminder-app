import React, { useState } from "react";
import AppStack from "../navigation/AppStack";
import AuthStack from "../navigation/AuthStack";
import { NavigationContainer } from "@react-navigation/native";

export const UserContext = React.createContext();

export default function RootStack() {
  const [user, setUser] = useState(false);

  return (
    <NavigationContainer>
      {user ? (
        <AppStack />
      ) : (
        <UserContext.Provider value={setUser}>
          <AuthStack />
        </UserContext.Provider>
      )}
    </NavigationContainer>
  );
}

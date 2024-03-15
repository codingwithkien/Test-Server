import React from "react";
import ChatApp from "./components/ChatApp";

const App = () => {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Home">
    //     <Stack.Screen
    //       name="Home"
    //       component={HomeScreen}
    //       options={{ title: "Home" }}
    //     />
    //     <Stack.Screen
    //       name="Chat"
    //       component={ChatScreen}
    //       options={{ title: "Chat" }}
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <ChatApp />
  );
};

export default App;

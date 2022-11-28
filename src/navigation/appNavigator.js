import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Signin from "../screens/signin/signin";
import Signup from "../screens/signup/signup";

function AppNavigator() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer style={{ flex: 1, backgroundColor: "green" }}>
      <Stack.Navigator style={{ flex: 1, backgroundColor: "green" }}>
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export { AppNavigator };

import { SafeAreaView } from "react-native";
import { AppNavigator } from "./src/navigation/appNavigator";
//import Signin from "./src/screens/signin/signin";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AppNavigator />
    </SafeAreaView>
  );
}

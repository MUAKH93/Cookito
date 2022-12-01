import { View, Text, TouchableOpacity } from "react-native";
import { CButton } from "../../components/CButton";

function Signin({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Signin Screen</Text>
      <CButton />
      <TouchableOpacity>
        <Text
          style={{ backgroundColor: "pink" }}
          onPress={() => {
            //Linking.openURL(loginURL);
            navigation.navigate("Signup");
          }}
        >
          Go to Sign Up
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default Signin;

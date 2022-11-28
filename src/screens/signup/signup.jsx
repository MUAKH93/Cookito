import { Text, View, TouchableOpacity } from "react-native";
function Signup({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Signup Screen</Text>
      <TouchableOpacity>
        <Text
          style={{ backgroundColor: "yellow" }}
          onPress={() => {
            navigation.navigate("Signin");
          }}
        >
          Go to Sign In
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default Signup;

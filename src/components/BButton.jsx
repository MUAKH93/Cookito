import { TouchableOpacity, Text, StyleSheet} from "react-native";

function BButton({ title = "title", bgColor = "red" onButtonPress}) {
  return (
    <TouchableOpacity style={StyleSheet.btn} onPress={onButtonPress}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
}
export { BButton };

style  = StyleSheet.create({

    btn: {
        padding:10,
        backgroundColor:bgColor,
    }
});

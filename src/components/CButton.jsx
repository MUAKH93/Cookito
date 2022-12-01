import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { colors, modifiers } from "../utils/themes";

function CButton({ title = "title", onButtonPress }) {
  return (
    <TouchableOpacity style={style.btn} onPress={onButtonPress}>
      <Text style={style.btnTitle}>{title}</Text>
    </TouchableOpacity>
  );
}
export { CButton };

style = StyleSheet.create({
  btn: {
    padding: 10,
    backgroundColor: colors.primary,
    height: 50,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    margin: modifiers.itemMargin,
  },
  btnTitle: {
    color: colors.white,
    fontSize: 20,
    fontFamily: "sans-serif-thin",
  },
});

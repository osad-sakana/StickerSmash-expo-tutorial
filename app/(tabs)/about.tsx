import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>「〜とは」スクリーン</Text>
      <Link href="/" style={styles.button}>ホームに戻る</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    fontSize: 20,
  },
  button: {
    marginTop: 20,
    color: "#1E90FF",
    fontSize: 18,
    textDecorationLine: "underline",
  }
});

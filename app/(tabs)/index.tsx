import { View, Text, Pressable, StyleSheet } from "react-native";
import { router } from "expo-router";

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Political Survey (Demo)</Text>

      <Pressable style={styles.button} onPress={() => router.push("/survey")}>
        <Text style={styles.buttonText}>Start Survey</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 22, marginBottom: 20 },
  button: {
    backgroundColor: "#000",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 6
  },
  buttonText: { color: "#fff", fontSize: 16 }
});

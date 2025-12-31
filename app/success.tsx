import { View, Text, Pressable } from "react-native";
import { router } from "expo-router";

export default function SuccessScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>
        Thank you!
      </Text>

      <Pressable
        onPress={() => router.replace("/survey")}
        style={{
          backgroundColor: "#000",
          paddingHorizontal: 20,
          paddingVertical: 12,
          borderRadius: 6
        }}
      >
        <Text style={{ color: "#fff" }}>New Survey</Text>
      </Pressable>
    </View>
  );
}

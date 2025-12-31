// import { View, Text, Pressable } from "react-native";

// type Props = {
//   options: string[];
//   value: string;
//   onChange: (val: string) => void;
// };

// export default function RadioGroup({ options, value, onChange }: Props) {
//   return (
//     <View>
//       {options.map(option => (
//         <Pressable
//           key={option}
//           onPress={() => onChange(option)}
//           style={{ flexDirection: "row", marginVertical: 6 }}
//         >
//           <Text style={{ marginRight: 8 }}>
//             {value === option ? "🔘" : "⚪"}
//           </Text>
//           <Text>{option}</Text>
//         </Pressable>
//       ))}
//     </View>
//   );
// }

// Enhanced RadioGroup Component
// type RadioGroupProps = {
//   options: string[];
//   value: string;
//   onChange: (val: string) => void;
//   variant?: "default" | "card";
// };

// export default function RadioGroup({ options, value, onChange, variant = "default" }: RadioGroupProps) {
//   return (
//     <View style={styles.radioContainer}>
//       {options.map(option => (
//         <Pressable
//           key={option}
//           onPress={() => onChange(option)}
//           style={({ pressed }) => [
//             variant === "card" ? styles.radioCard : styles.radioItem,
//             pressed && styles.radioPressed,
//             value === option && styles.radioSelected
//           ]}
//         >
//           <View style={styles.radioCircle}>
//             {value === option ? (
//               <View style={styles.radioInnerCircle} />
//             ) : null}
//           </View>
//           <Text style={[
//             styles.radioText,
//             value === option && styles.radioTextSelected
//           ]}>
//             {option}
//           </Text>
//           {value === option && (
//             <Ionicons name="checkmark-circle" size={20} color="#4F46E5" style={styles.radioIcon} />
//           )}
//         </Pressable>
//       ))}
//     </View>
//   );
// }


import { View, Text, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type RadioGroupProps = {
  options: string[];
  value: string;
  onChange: (val: string) => void;
  variant?: "default" | "card";
};

export default function RadioGroup({ 
  options, 
  value, 
  onChange, 
  variant = "default" 
}: RadioGroupProps) {
  return (
    <View style={styles.radioContainer}>
      {options.map(option => (
        <Pressable
          key={option}
          onPress={() => onChange(option)}
          style={({ pressed }) => [
            variant === "card" ? styles.radioCard : styles.radioItem,
            pressed && styles.radioPressed,
            value === option && styles.radioSelected
          ]}
        >
          <View style={styles.radioCircle}>
            {value === option ? (
              <View style={styles.radioInnerCircle} />
            ) : null}
          </View>
          <Text style={[
            styles.radioText,
            value === option && styles.radioTextSelected
          ]}>
            {option}
          </Text>
          {value === option && (
            <Ionicons name="checkmark-circle" size={20} color="#4F46E5" style={styles.radioIcon} />
          )}
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  radioContainer: {
    gap: 8,
  },
  radioCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#E5E7EB",
    backgroundColor: "#FFF",
  },
  radioItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 8,
  },
  radioSelected: {
    borderColor: "#4F46E5",
    backgroundColor: "#F5F3FF",
  },
  radioPressed: {
    opacity: 0.8,
  },
  radioCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#D1D5DB",
    marginRight: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  radioInnerCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#4F46E5",
  },
  radioText: {
    fontSize: 16,
    color: "#374151",
    flex: 1,
  },
  radioTextSelected: {
    color: "#111827",
    fontWeight: "500",
  },
  radioIcon: {
    marginLeft: 8,
  },
});
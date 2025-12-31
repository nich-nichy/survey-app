// import { View, Text, TextInput } from "react-native";

// type Props = {
//   label: string;
//   value: string;
//   onChange: (val: string) => void;
// };

// export default function TextQuestion({ label, value, onChange }: Props) {
//   return (
//     <View style={{ marginVertical: 12 }}>
//       <Text>{label}</Text>
//       <TextInput
//         value={value}
//         onChangeText={onChange}
//         multiline
//         style={{
//           borderWidth: 1,
//           borderColor: "#ccc",
//           padding: 10,
//           borderRadius: 6,
//           marginTop: 6
//         }}
//       />
//     </View>
//   );
// }


// Enhanced TextQuestion Component
// type TextQuestionProps = {
//   value: string;
//   onChange: (val: string) => void;
//   placeholder?: string;
//   maxLength?: number;
//   showCounter?: boolean;
// };

// export default function TextQuestion({ 
//   value, 
//   onChange, 
//   placeholder = "Type your answer...",
//   maxLength = 500,
//   showCounter = false 
// }: TextQuestionProps) {
//   return (
//     <View>
//       <View style={styles.textInputContainer}>
//         <TextInput
//           value={value}
//           onChangeText={onChange}
//           multiline
//           placeholder={placeholder}
//           placeholderTextColor="#9CA3AF"
//           maxLength={maxLength}
//           style={styles.textInput}
//         />
//         {showCounter && (
//           <Text style={styles.charCounter}>
//             {value.length}/{maxLength}
//           </Text>
//         )}
//       </View>
//     </View>
//   );
// }


import { View, TextInput, Text, StyleSheet } from "react-native";

type TextQuestionProps = {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  maxLength?: number;
  showCounter?: boolean;
};

export default function TextQuestion({ 
  value, 
  onChange, 
  placeholder = "Type your answer...",
  maxLength = 500,
  showCounter = false 
}: TextQuestionProps) {
  return (
    <View>
      <View style={styles.textInputContainer}>
        <TextInput
          value={value}
          onChangeText={onChange}
          multiline
          placeholder={placeholder}
          placeholderTextColor="#9CA3AF"
          maxLength={maxLength}
          style={styles.textInput}
        />
        {showCounter && (
          <Text style={styles.charCounter}>
            {value.length}/{maxLength}
          </Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textInputContainer: {
    position: "relative",
  },
  textInput: {
    borderWidth: 2,
    borderColor: "#E5E7EB",
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    color: "#111827",
    backgroundColor: "#FFF",
    minHeight: 120,
    textAlignVertical: "top",
  },
  charCounter: {
    position: "absolute",
    bottom: 12,
    right: 12,
    fontSize: 12,
    color: "#9CA3AF",
  },
});
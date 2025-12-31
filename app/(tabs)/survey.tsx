// import { ScrollView, Text, Pressable, Alert } from "react-native";
// import { useState } from "react";
// import { router } from "expo-router";
// import RadioGroup from "../../components/RadioGroup";
// import TextQuestion from "../../components/TextQuestion";
// import { surveyOne, surveyTwo, surveyThree } from "../../constants/survey";

// export default function SurveyScreen() {
//   const [vote, setVote] = useState("");
//   const [reason, setReason] = useState("");
//   const [improvement, setImprovement] = useState("");

//   const submitSurvey = () => {
//     console.log({ vote, reason, improvement }); // demo only
//     Alert.alert("Submitted", "Demo response recorded");
//     router.replace("/success");
//   };

//   return (
//     <ScrollView contentContainerStyle={{ padding: 20 }}>
//       <Text style={{ fontSize: 18, marginBottom: 10, textAlign: "center", fontSize: "bold"}}>2026 Political Survey</Text>
//       <Text style={{ fontSize: 18, marginBottom: 10 }}>
//         Who will you vote for?
//       </Text>

//       <RadioGroup
//         options={surveyOne}
//         value={vote}
//         onChange={setVote}
//       />
      
//        <Text style={{ fontSize: 18, marginBottom: 10 }}>
//         Which tittam(plan) do you liked the most?
//       </Text>

//      <RadioGroup
//         options={surveyTwo}
//         value={vote}
//         onChange={setVote}
//       />

// <Text style={{ fontSize: 18, marginBottom: 10 }}>There should be policies to resolve the gap between the rich and the poor.</Text>
//  <RadioGroup
//         options={surveyThree}
//         value={vote}
//         onChange={setVote}
//       />
//       <TextQuestion
//         label="Why are you voting for them?"
//         value={reason}
//         onChange={setReason}
//       />

//       <TextQuestion
//         label="What improvement do you expect?"
//         value={improvement}
//         onChange={setImprovement}
//       />

//       <Pressable
//         onPress={submitSurvey}
//         style={{
//           backgroundColor: "#000",
//           padding: 14,
//           borderRadius: 6,
//           marginTop: 20
//         }}
//       >
//         <Text style={{ color: "#fff", textAlign: "center" }}>
//           Submit Survey
//         </Text>
//       </Pressable>
//     </ScrollView>
//   );
// }


// import { ScrollView, Text, Pressable, Alert, StyleSheet, View } from "react-native";
// import { useState } from "react";
// import { router } from "expo-router";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { Ionicons } from "@expo/vector-icons";

// export default function SurveyScreen() {
//   const [vote, setVote] = useState("");
//   const [reason, setReason] = useState("");
//   const [improvement, setImprovement] = useState("");

//   const submitSurvey = () => {
//     if (!vote) {
//       Alert.alert("Missing Answer", "Please select who you will vote for before submitting.");
//       return;
//     }
//     console.log({ vote, reason, improvement });
//     Alert.alert("Submitted", "Thank you for your feedback!");
//     router.replace("/success");
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView 
//         contentContainerStyle={styles.scrollContent}
//         showsVerticalScrollIndicator={false}
//       >
//         {/* Header */}
//         <View style={styles.header}>
//           <View style={styles.titleContainer}>
//             <Ionicons name="document-text-outline" size={24} color="#4F46E5" />
//             <Text style={styles.title}>2026 Political Survey</Text>
//           </View>
//           <Text style={styles.subtitle}>Your opinion matters. Help shape the future.</Text>
//         </View>

//         {/* Progress Indicator */}
//         <View style={styles.progressContainer}>
//           <View style={styles.progressBar}>
//             <View style={[styles.progressFill, { width: '60%' }]} />
//           </View>
//           <Text style={styles.progressText}>3 of 5 questions</Text>
//         </View>

//         {/* Question 1 */}
//         <QuestionCard 
//           question="Who will you vote for?"
//           isRequired={true}
//         >
//           <RadioGroup
//             options={surveyOne}
//             value={vote}
//             onChange={setVote}
//             variant="card"
//           />
//         </QuestionCard>

//         {/* Question 2 */}
//         <QuestionCard 
//           question="Which tittam (plan) did you like the most?"
//           isRequired={true}
//         >
//           <RadioGroup
//             options={surveyTwo}
//             value={vote}
//             onChange={setVote}
//             variant="card"
//           />
//         </QuestionCard>

//         {/* Question 3 */}
//         <QuestionCard 
//           question="There should be policies to resolve the gap between the rich and the poor."
//           isRequired={true}
//         >
//           <RadioGroup
//             options={surveyThree}
//             value={vote}
//             onChange={setVote}
//             variant="card"
//           />
//         </QuestionCard>

//         {/* Question 4 */}
//         <QuestionCard 
//           question="Why are you voting for them?"
//           isRequired={false}
//         >
//           <TextQuestion
//             value={reason}
//             onChange={setReason}
//             placeholder="Share your thoughts..."
//             maxLength={500}
//             showCounter={true}
//           />
//         </QuestionCard>

//         {/* Question 5 */}
//         <QuestionCard 
//           question="What improvement do you expect?"
//           isRequired={false}
//         >
//           <TextQuestion
//             value={improvement}
//             onChange={setImprovement}
//             placeholder="Describe your expectations..."
//             maxLength={500}
//             showCounter={true}
//           />
//         </QuestionCard>

//         {/* Submit Button */}
//         <Pressable
//           onPress={submitSurvey}
//           style={({ pressed }) => [
//             styles.submitButton,
//             pressed && styles.submitButtonPressed,
//             !vote && styles.submitButtonDisabled
//           ]}
//           disabled={!vote}
//         >
//           <Ionicons name="checkmark-circle" size={20} color="#FFF" />
//           <Text style={styles.submitButtonText}>
//             {vote ? "Submit Survey" : "Select an Option to Submit"}
//           </Text>
//         </Pressable>

//         <Text style={styles.footerNote}>
//           All responses are anonymous and confidential
//         </Text>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#F9FAFB",
//   },
//   scrollContent: {
//     padding: 16,
//     paddingBottom: 40,
//   },
//   header: {
//     marginBottom: 24,
//     paddingHorizontal: 8,
//   },
//   titleContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 8,
//     gap: 12,
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: "700",
//     color: "#111827",
//   },
//   subtitle: {
//     fontSize: 16,
//     color: "#6B7280",
//     lineHeight: 24,
//   },
//   progressContainer: {
//     marginBottom: 24,
//   },
//   progressBar: {
//     height: 6,
//     backgroundColor: "#E5E7EB",
//     borderRadius: 3,
//     marginBottom: 8,
//     overflow: "hidden",
//   },
//   progressFill: {
//     height: "100%",
//     backgroundColor: "#4F46E5",
//     borderRadius: 3,
//   },
//   progressText: {
//     fontSize: 14,
//     color: "#6B7280",
//     textAlign: "right",
//   },
//   questionCard: {
//     backgroundColor: "#FFF",
//     borderRadius: 16,
//     padding: 20,
//     marginBottom: 16,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.05,
//     shadowRadius: 8,
//     elevation: 2,
//     borderWidth: 1,
//     borderColor: "#F3F4F6",
//   },
//   questionHeader: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "flex-start",
//     marginBottom: 16,
//   },
//   questionText: {
//     fontSize: 18,
//     fontWeight: "600",
//     color: "#111827",
//     flex: 1,
//     lineHeight: 28,
//   },
//   requiredBadge: {
//     backgroundColor: "#FEF2F2",
//     color: "#DC2626",
//     fontSize: 12,
//     fontWeight: "600",
//     paddingHorizontal: 8,
//     paddingVertical: 4,
//     borderRadius: 12,
//     marginLeft: 12,
//   },
//   radioContainer: {
//     gap: 8,
//   },
//   radioCard: {
//     flexDirection: "row",
//     alignItems: "center",
//     padding: 16,
//     borderRadius: 12,
//     borderWidth: 2,
//     borderColor: "#E5E7EB",
//     backgroundColor: "#FFF",
//   },
//   radioItem: {
//     flexDirection: "row",
//     alignItems: "center",
//     paddingVertical: 12,
//     paddingHorizontal: 8,
//   },
//   radioSelected: {
//     borderColor: "#4F46E5",
//     backgroundColor: "#F5F3FF",
//   },
//   radioPressed: {
//     opacity: 0.8,
//   },
//   radioCircle: {
//     width: 20,
//     height: 20,
//     borderRadius: 10,
//     borderWidth: 2,
//     borderColor: "#D1D5DB",
//     marginRight: 12,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   radioInnerCircle: {
//     width: 10,
//     height: 10,
//     borderRadius: 5,
//     backgroundColor: "#4F46E5",
//   },
//   radioText: {
//     fontSize: 16,
//     color: "#374151",
//     flex: 1,
//   },
//   radioTextSelected: {
//     color: "#111827",
//     fontWeight: "500",
//   },
//   radioIcon: {
//     marginLeft: 8,
//   },
//   textInputContainer: {
//     position: "relative",
//   },
//   textInput: {
//     borderWidth: 2,
//     borderColor: "#E5E7EB",
//     borderRadius: 12,
//     padding: 16,
//     fontSize: 16,
//     color: "#111827",
//     backgroundColor: "#FFF",
//     minHeight: 120,
//     textAlignVertical: "top",
//   },
//   charCounter: {
//     position: "absolute",
//     bottom: 12,
//     right: 12,
//     fontSize: 12,
//     color: "#9CA3AF",
//   },
//   submitButton: {
//     backgroundColor: "#4F46E5",
//     padding: 18,
//     borderRadius: 12,
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//     gap: 10,
//     marginTop: 24,
//     shadowColor: "#4F46E5",
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 8,
//     elevation: 4,
//   },
//   submitButtonPressed: {
//     backgroundColor: "#4338CA",
//     transform: [{ scale: 0.98 }],
//   },
//   submitButtonDisabled: {
//     backgroundColor: "#9CA3AF",
//     shadowOpacity: 0,
//   },
//   submitButtonText: {
//     color: "#FFF",
//     fontSize: 18,
//     fontWeight: "600",
//     textAlign: "center",
//   },
//   footerNote: {
//     textAlign: "center",
//     color: "#9CA3AF",
//     fontSize: 14,
//     marginTop: 20,
//     paddingHorizontal: 20,
//   },
// });


import { 
  ScrollView, 
  Text, 
  Pressable, 
  Alert, 
  StyleSheet, 
  View, 
  TextInput 
} from "react-native";
import { useState } from "react";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import RadioGroup from "../../components/RadioGroup";
import TextQuestion from "../../components/TextQuestion";
import { surveyOne, surveyTwo, surveyThree } from "../../constants/survey";

// Question Card Wrapper Component
type QuestionCardProps = {
  children: React.ReactNode;
  question: string;
  isRequired: boolean;
};

function QuestionCard({ children, question, isRequired }: QuestionCardProps) {
  return (
    <View style={styles.questionCard}>
      <View style={styles.questionHeader}>
        <Text style={styles.questionText}>{question}</Text>
        {isRequired && (
          <Text style={styles.requiredBadge}>Required</Text>
        )}
      </View>
      {children}
    </View>
  );
}

export default function SurveyScreen() {
  const [vote1, setVote1] = useState(""); // For question 1
  const [vote2, setVote2] = useState(""); // For question 2  
  const [vote3, setVote3] = useState(""); // For question 3
  const [reason, setReason] = useState("");
  const [improvement, setImprovement] = useState("");

  // Calculate progress
  const totalQuestions = 5;
  const answeredQuestions = [vote1, vote2, vote3, reason, improvement].filter(Boolean).length;
  const progressPercentage = (answeredQuestions / totalQuestions) * 100;

  const submitSurvey = () => {
    if (!vote1 || !vote2 || !vote3) {
      Alert.alert("Missing Answers", "Please answer all required questions before submitting.");
      return;
    }
    
    console.log({ vote1, vote2, vote3, reason, improvement });
    Alert.alert("Submitted", "Thank you for your feedback!");
    router.replace("/success");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.titleContainer}>
            <Ionicons name="document-text-outline" size={24} color="#4F46E5" />
            <Text style={styles.title}>2026 Political Survey</Text>
          </View>
          <Text style={styles.subtitle}>Your opinion matters. Help shape the future.</Text>
        </View>

        {/* Progress Indicator */}
        <View style={styles.progressContainer}>
          <View style={styles.progressBar}>
            <View 
              style={[
                styles.progressFill, 
                { width: `${progressPercentage}%` }
              ]} 
            />
          </View>
          <Text style={styles.progressText}>
            {answeredQuestions} of {totalQuestions} questions answered
          </Text>
        </View>

        {/* Question 1 */}
        <QuestionCard 
          question="Who will you vote for?"
          isRequired={true}
        >
          <RadioGroup
            options={surveyOne}
            value={vote1}
            onChange={setVote1}
            variant="card"
          />
        </QuestionCard>

        {/* Question 2 */}
        <QuestionCard 
          question="Which tittam (plan) did you like the most?"
          isRequired={true}
        >
          <RadioGroup
            options={surveyTwo}
            value={vote2}
            onChange={setVote2}
            variant="card"
          />
        </QuestionCard>

        {/* Question 3 */}
        <QuestionCard 
          question="There should be policies to resolve the gap between the rich and the poor."
          isRequired={true}
        >
          <RadioGroup
            options={surveyThree}
            value={vote3}
            onChange={setVote3}
            variant="card"
          />
        </QuestionCard>

        {/* Question 4 */}
        <QuestionCard 
          question="Why are you voting for them?"
          isRequired={false}
        >
          <TextQuestion
            value={reason}
            onChange={setReason}
            placeholder="Share your thoughts..."
            maxLength={500}
            showCounter={true}
          />
        </QuestionCard>

        {/* Question 5 */}
        <QuestionCard 
          question="What improvement do you expect?"
          isRequired={false}
        >
          <TextQuestion
            value={improvement}
            onChange={setImprovement}
            placeholder="Describe your expectations..."
            maxLength={500}
            showCounter={true}
          />
        </QuestionCard>

        {/* Submit Button */}
        <Pressable
          onPress={submitSurvey}
          style={({ pressed }) => [
            styles.submitButton,
            pressed && styles.submitButtonPressed,
            (!vote1 || !vote2 || !vote3) && styles.submitButtonDisabled
          ]}
          disabled={!vote1 || !vote2 || !vote3}
        >
          <Ionicons name="checkmark-circle" size={20} color="#FFF" />
          <Text style={styles.submitButtonText}>
            {(!vote1 || !vote2 || !vote3) 
              ? "Answer Required Questions to Submit" 
              : "Submit Survey"}
          </Text>
        </Pressable>

        <Text style={styles.footerNote}>
          All responses are anonymous and confidential
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 40,
  },
  header: {
    marginBottom: 24,
    paddingHorizontal: 8,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    gap: 12,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#111827",
  },
  subtitle: {
    fontSize: 16,
    color: "#6B7280",
    lineHeight: 24,
  },
  progressContainer: {
    marginBottom: 24,
  },
  progressBar: {
    height: 6,
    backgroundColor: "#E5E7EB",
    borderRadius: 3,
    marginBottom: 8,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#4F46E5",
    borderRadius: 3,
  },
  progressText: {
    fontSize: 14,
    color: "#6B7280",
    textAlign: "right",
  },
  questionCard: {
    backgroundColor: "#FFF",
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    borderWidth: 1,
    borderColor: "#F3F4F6",
  },
  questionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 16,
  },
  questionText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#111827",
    flex: 1,
    lineHeight: 28,
  },
  requiredBadge: {
    backgroundColor: "#FEF2F2",
    color: "#DC2626",
    fontSize: 12,
    fontWeight: "600",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginLeft: 12,
  },
  submitButton: {
    backgroundColor: "#4F46E5",
    padding: 18,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    marginTop: 24,
    shadowColor: "#4F46E5",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  submitButtonPressed: {
    backgroundColor: "#4338CA",
    transform: [{ scale: 0.98 }],
  },
  submitButtonDisabled: {
    backgroundColor: "#9CA3AF",
    shadowOpacity: 0,
  },
  submitButtonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
  footerNote: {
    textAlign: "center",
    color: "#9CA3AF",
    fontSize: 14,
    marginTop: 20,
    paddingHorizontal: 20,
  },
});
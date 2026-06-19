import { Text, View } from "react-native";
import { useContext } from "react";
import StudentContext from "@/context/context";
export default function Index() {
  const { studentInfo, setStudentInfo } = useContext(StudentContext);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Index screen</Text>
      <Text>Username: {studentInfo.username}</Text>
    </View>
  );
}

import { Text, View, ActivityIndicator, Pressable, StyleSheet } from "react-native";
import { useContext, useState, useEffect } from "react";
import StudentContext from "@/context/context";
export default function Index() {
  const { studentInfo, setStudentInfo } = useContext(StudentContext);
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0.2);

  function handleLoadingState() {
    if (isLoading) {
      return <ActivityIndicator size={'large'} color={'lightgreen'} />
    } else {
      return <></>
    }
  }

  // handle progress simulation
  function progressSimulator() {
    const interval = setInterval(() => {
      setProgress((progress => progress += 0.2));
      console.log('progress: ', progress);
    }, 2000);
    if (progress === 100) {
      clearInterval(interval);
      console.log('interval has cleared');
    }
  }

  useEffect(() => {
    progressSimulator();
  }, []);
  return (
    <View
      style={{
        flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
        marginLeft: 10,
        marginRight: 10,
      }}
    >
      <Text>Index screen</Text>
      <Text>Username: {studentInfo.username}</Text>
      {handleLoadingState()}
      <Pressable onPress={() => setIsLoading(true)}>change loading state</Pressable>
      <br /><hr /><br />
      <View>
        <Text>Bar progress indicator</Text>
        <View style={styles.track}>
          <View style={[styles.indicator, { width: progress * 100 }]}></View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  track: {
    backgroundColor: 'lightgreen',
    height: 40,
    width: '100%',
    borderRadius: 25,
    overflow: 'hidden',

  },
  indicator: {
    backgroundColor: 'darkgreen',
    height: '100%',
  }
})

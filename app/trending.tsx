import { View, Text, StyleSheet } from 'react-native';

export default function Trending() {
    return (
        <View style={styles.container}>
            <Text>Trending Page</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
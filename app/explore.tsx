import { View, Text, StyleSheet } from 'react-native';
import Count from '@/components/Statefull';

export default function Explore() {
    return (
        <View style={styles.container}>
            <Text>Explore Page</Text>
            <Count />
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
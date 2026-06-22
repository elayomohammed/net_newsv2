import { View, Text, StyleSheet } from 'react-native'
import { useTrendingNewsContext } from './_layout'

export default function Sport() {
    const { trendingNews } = useTrendingNewsContext();
    return (
        <View style={styles.container}>
            <Text>Trending Sport News</Text>
            <Text>{trendingNews.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    }
})
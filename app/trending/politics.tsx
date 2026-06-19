import { View, Text, StyleSheet } from 'react-native'
// import { TrendingNewsContext } from '@/context/context'
// import { useContext } from 'react';
import { useTrendingNewsContext } from './_layout';

export default function Politics() {
    // const { trendingNews, setTrendingNews } = useContext(TrendingNewsContext);
    const { trendingNews, setTrendingNews } = useTrendingNewsContext();
    return (
        <View style={styles.container}>
            <Text>{trendingNews.id}</Text>
            <Text><h1>Trending Political News</h1></Text>
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
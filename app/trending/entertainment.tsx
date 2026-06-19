import { View, Text, StyleSheet } from 'react-native'
import { useTrendingNewsContext } from './_layout'

export default function Entertainment() {
    const { trendingNews, updateTitle, setTrendingNews } = useTrendingNewsContext();
    async function handleFormData(event: any) {
        event.preventDefault();
        let newTitle = event.target.title.value;
        await updateTitle(newTitle);
    }
    return (
        <View style={styles.container}>
            <Text>{trendingNews.id}</Text>
            <form onSubmit={(event => handleFormData(event))}>
                <input type='text' name='title' />
                <input type='submit' value='update title' />
            </form>
            <h1><Text>Trending Entertainment News</Text></h1>
            <Text>Post title: {trendingNews.title}</Text>
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
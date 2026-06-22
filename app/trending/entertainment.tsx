import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
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
            <View>
                <TextInput placeholder='enter title' />
                <Button title='submit' onPress={handleFormData} />
            </View>
            <Text>Trending Entertainment News</Text>
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
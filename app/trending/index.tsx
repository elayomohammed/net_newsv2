import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import UserView from '@/components/UserView';

const listData = [
    {
        name: "Lorem 1", id: 12345, age: 35,
    },
    {
        name: "Lorem 2", id: 67890
    },
    {
        name: "Lorem 3", id: 10234, age: 27,
    },
    {
        name: "Lorem 4", id: 52645
    },
    {
        name: "Lorem 5", id: 54345, age: 32,
    },
    {
        name: "Lorem 6", id: 65345
    },
    {
        name: "Lorem 7", id: 178345
    },
    {
        name: "Lorem 8", id: 178545, age: 51,
    },
    {
        name: "Lorem 9", id: 28345
    },
    {
        name: "Lorem 10", id: 90345, age: 43,
    }
]

const filteredListData = listData.filter(data => data.age !== undefined);

export default function Index() {
    const [posts, setPosts] = useState<any>([]);
    const [lazyLoadedPost, setLazyLoadedPosts] = useState<any>([]);
    const [pageCount, setPageCount] = useState<number>(0);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [hasMorePosts, setHasMorePosts] = useState<boolean>(true);

    // function to handle fetching next list page
    const fetchNextPage = () => {
        console.log('fethching next page...')
        if (isLoading && !hasMorePosts) return;
        if (pageCount === 0) {
            setIsLoading(true);
            let pagePosts = [];
            for (let count = 0; count <= posts[count + 9]; count++) {
                pagePosts.push(posts[count]);
            }
            console.log('loaded posts', pagePosts);
            setLazyLoadedPosts([...lazyLoadedPost, ...pagePosts]);
            setPageCount(pageCount => pageCount += 1);
        } else if (pageCount === 1) {
            let pagePosts = [];
            for (let count = 10; count <= posts[count + 19]; count++) {
                pagePosts.push(posts[count]);
            }
            setLazyLoadedPosts([...lazyLoadedPost, ...pagePosts]);
            setPageCount(pageCount => pageCount += 1)
        } else if (pageCount === 2) {
            let pagePosts = [];
            for (let count = 20; count <= posts[count + 29]; count++) {
                pagePosts.push(posts[count]);
            }
            setLazyLoadedPosts([...lazyLoadedPost, ...pagePosts]);
            setPageCount(pageCount => pageCount += 1)
        } else if (pageCount === 3) {
            let pagePosts = [];
            for (let count = 30; count <= posts[count + 39]; count++) {
                pagePosts.push(posts[count]);
            }
            setLazyLoadedPosts([...lazyLoadedPost, ...pagePosts]);
            setPageCount(pageCount => pageCount += 1)
        } else if (pageCount === 4) {
            let pagePosts = [];
            for (let count = 40; count <= posts[count + 49]; count++) {
                pagePosts.push(posts[count]);
            }
            setLazyLoadedPosts([...lazyLoadedPost, ...pagePosts]);
            setPageCount(pageCount => pageCount += 1)
            setHasMorePosts(false)
        }
    }

    useEffect(() => {
        async function fetchUserData() {
            try {
                window.addEventListener('offline', () => {
                    let offlineInfo = 'error no internet available'
                    setPosts([...posts, offlineInfo]);
                    return;
                })
                let usersEndpoint = 'https://jsonplaceholder.typicode.com/users'
                let postsEndpoint = 'https://jsonplaceholder.typicode.com/posts';
                const res = await fetch(postsEndpoint);
                const data = await res.json();
                if (data.length > 0) {
                    console.log("data", data);
                    setPosts([...posts, data]);
                    return;
                } else {
                    let fetchingErrorInfo = 'error or no users data available';
                    setPosts([...posts, fetchingErrorInfo]);
                    return;
                }
            } catch (err) {
                console.error('fetching error: ', err);
            }
        }
        fetchUserData();
        fetchNextPage();
        console.log("lazyLoad Posts", lazyLoadedPost[0]);
    }, [fetchNextPage]);

    return (
        <View style={styles.container}>
            {/* <Text><h1>List Data</h1></Text>
            <FlatList
                data={listData}
                renderItem={({ item, index }) => {
                    return (
                        <ul>
                            <Text key={index}>Name: {item.name} | ID: {item.id}</Text>
                        </ul>
                    )
                }}
            />

            <Text>X<h1>Filterd List Data</h1></Text>
            <FlatList
                data={filteredListData}
                renderItem={({ item, index }) => {
                    return (
                        <ul>
                            <Text key={index}>Name: {item.name} | ID: {item.id} | Age: {item.age}</Text>
                        </ul>
                    )
                }}
            /> */}

            <Text><h1>User List Data</h1></Text>
            {
                lazyLoadedPost[0].length > 0 ?
                    <FlatList

                        data={lazyLoadedPost[0]}
                        renderItem={({ item, index }) => {
                            return (
                                <UserView id={item.id} name={item.name} email={item.email} phone={item.phone} title={item.title} body={item.body} />
                            )
                        }}
                        // onEndReached prop expect a function that fetches new list page
                        onEndReached={fetchNextPage}
                    /> : <View>no posts available</View>
            }
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
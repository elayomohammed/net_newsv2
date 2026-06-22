import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
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

const postPageMetadata = [
    {
        pageCount: 1,
        startIndex: 0,
        stopIndex: 9
    },
    {
        pageCount: 2,
        startIndex: 10,
        stopIndex: 19
    },
    {
        pageCount: 3,
        startIndex: 20,
        stopIndex: 29
    },
    {
        pageCount: 4,
        startIndex: 30,
        stopIndex: 39
    },
    {
        pageCount: 5,
        startIndex: 40,
        stopIndex: 49
    },
    {
        pageCount: 6,
        startIndex: 50,
        stopIndex: 59
    },
    {
        pageCount: 7,
        startIndex: 60,
        stopIndex: 69
    },
    {
        pageCount: 8,
        startIndex: 70,
        stopIndex: 79
    },
    {
        pageCount: 9,
        startIndex: 80,
        stopIndex: 89
    },
    {
        pageCount: 10,
        startIndex: 90,
        stopIndex: 99
    },
]

export default function Index() {
    let [posts, setPosts] = useState<any>([]);
    let [lazyLoadedPost, setLazyLoadedPosts] = useState<any>([]);
    const [pageCount, setPageCount] = useState<number>(1);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [hasMorePosts, setHasMorePosts] = useState<boolean>(true);

    // handle data fetch
    async function handleFetchData() {
        console.count('fetching data');
        try {
            let usersEndpoint = 'https://jsonplaceholder.typicode.com/users'
            let postsEndpoint = 'https://jsonplaceholder.typicode.com/posts';
            if (posts.length == 100) return;
            const res = await fetch(postsEndpoint);
            const data = await res.json();
            if (data.length > 0) {
                await setPosts([...posts, ...data]);
                console.log("data", data);
                return;
            } else {
                let fetchingErrorInfo = 'error or no users data available';
                setPosts([...posts, ...fetchingErrorInfo]);
                return;
            }
        } catch (err) {
            console.error('fetching error: ', err);
        }
    }
    // function to handle fetching next list page
    async function fetchNextPage() {
        console.log('fethching next page..., page: ', pageCount);
        console.count('fetching next page');
        console.log('available post: ', posts);
        if (isLoading && !hasMorePosts) {
            console.log('You have reached the end of the list');
            return;
        }
        if (pageCount == 0) {
            setIsLoading(true);
            let pagePosts: any = [];
            for (let count = 0; count <= posts.length - 91; count++) {
                console.log('pushing into arrays');
                //pagePosts.push(posts[count]);
                setLazyLoadedPosts([...lazyLoadedPost, posts[count]]);
            }
            if (lazyLoadedPost.length == 10) {
                //setLazyLoadedPosts([...lazyLoadedPost, pagePosts]);
                setPageCount((pageCount) => pageCount += 1);
                setIsLoading(false);
            } else {
                setPageCount(pageCount);
                setIsLoading(true);
            }
        } else if (pageCount == 1) {
            setIsLoading(true);
            let pagePosts: any = [];
            for (let count = 9; count <= posts.length - 81; count++) {
                console.log('pushing into arrays');
                //pagePosts.push(posts[count]);
                setLazyLoadedPosts([...lazyLoadedPost, posts[count]]);
            }
            console.log('loaded posts', pagePosts);
            if (lazyLoadedPost.length == 20) {
                //setLazyLoadedPosts([...lazyLoadedPost, ...pagePosts]);
                setPageCount((pageCount) => pageCount += 1);
                setIsLoading(false);
            } else {
                setPageCount(pageCount);
                setIsLoading(true);
            }
        } else if (pageCount == 2) {
            setIsLoading(true);
            let pagePosts: any = [];
            for (let count = 19; count <= posts.length - 71; count++) {
                console.log('pushing into arrays');
                //pagePosts.push(posts[count]);
                setLazyLoadedPosts([...lazyLoadedPost, posts[count]]);
            }
            console.log('loaded posts', pagePosts);
            if (lazyLoadedPost.length == 30) {
                //setLazyLoadedPosts([...lazyLoadedPost, ...pagePosts]);
                setPageCount((pageCount) => pageCount += 1);
                setIsLoading(false);
            } else {
                setPageCount(pageCount);
                setIsLoading(true);
            }
        } else if (pageCount == 3) {
            setIsLoading(true);
            let pagePosts: any = [];
            for (let count = 29; count <= posts.length - 61; count++) {
                console.log('pushing into arrays');
                //pagePosts.push(posts[count]);
                setLazyLoadedPosts([...lazyLoadedPost, posts[count]]);
            }
            console.log('loaded posts', pagePosts);
            if (lazyLoadedPost.length == 40) {
                //setLazyLoadedPosts([...lazyLoadedPost, ...pagePosts]);
                setPageCount((pageCount) => pageCount += 1);
                setIsLoading(false);
            } else {
                setPageCount(pageCount);
                setIsLoading(true);
            }
        } else if (pageCount == 4) {
            setIsLoading(true);
            let pagePosts: any = [];
            for (let count = 39; count <= posts.length - 51; count++) {
                console.log('pushing into arrays');
                //pagePosts.push(posts[count]);
                setLazyLoadedPosts([...lazyLoadedPost, posts[count]]);
            }
            console.log('loaded posts', pagePosts);
            if (lazyLoadedPost.length == 50) {
                //setLazyLoadedPosts([...lazyLoadedPost, ...pagePosts]);
                setPageCount((pageCount) => pageCount += 1);
                setIsLoading(false);
            } else {
                setPageCount(pageCount);
                setIsLoading(true);
            }
        } else if (pageCount == 5) {
            setIsLoading(true);
            let pagePosts: any = [];
            for (let count = 49; count <= posts.length - 41; count++) {
                console.log('pushing into arrays');
                //pagePosts.push(posts[count]);
                setLazyLoadedPosts([...lazyLoadedPost, posts[count]]);
            }
            console.log('loaded posts', pagePosts);
            if (lazyLoadedPost.length == 60) {
                //setLazyLoadedPosts([...lazyLoadedPost, ...pagePosts]);
                setPageCount((pageCount) => pageCount += 1);
                setIsLoading(false);
            } else {
                setPageCount(pageCount);
                setIsLoading(true);
            }
        } else if (pageCount == 6) {
            setIsLoading(true);
            let pagePosts: any = [];
            for (let count = 59; count <= posts.length - 31; count++) {
                console.log('pushing into arrays');
                //pagePosts.push(posts[count]);
                setLazyLoadedPosts([...lazyLoadedPost, posts[count]]);
            }
            console.log('loaded posts', pagePosts);
            if (lazyLoadedPost.length == 70) {
                //setLazyLoadedPosts([...lazyLoadedPost, ...pagePosts]);
                setPageCount((pageCount) => pageCount += 1);
                setIsLoading(false);
            } else {
                setPageCount(pageCount);
                setIsLoading(true);
            }
        } else if (pageCount == 7) {
            setIsLoading(true);
            let pagePosts: any = [];
            for (let count = 69; count <= posts.length - 21; count++) {
                console.log('pushing into arrays');
                //pagePosts.push(posts[count]);
                setLazyLoadedPosts([...lazyLoadedPost, posts[count]]);
            }
            console.log('loaded posts', pagePosts);
            if (lazyLoadedPost.length == 80) {
                //setLazyLoadedPosts([...lazyLoadedPost, ...pagePosts]);
                setPageCount((pageCount) => pageCount += 1);
                setIsLoading(false);
            } else {
                setPageCount(pageCount);
                setIsLoading(true);
            }
        } else if (pageCount == 8) {
            setIsLoading(true);
            let pagePosts: any = [];
            for (let count = 79; count <= posts.length - 11; count++) {
                console.log('pushing into arrays');
                //pagePosts.push(posts[count]);
                setLazyLoadedPosts([...lazyLoadedPost, posts[count]]);
            }
            console.log('loaded posts', pagePosts);
            if (lazyLoadedPost.length == 90) {
                //setLazyLoadedPosts([...lazyLoadedPost, ...pagePosts]);
                setPageCount((pageCount) => pageCount += 1);
                setIsLoading(false);
            } else {
                setPageCount(pageCount);
                setIsLoading(true);
            }
        } else if (pageCount == 9) {
            setIsLoading(true);
            let pagePosts: any = [];
            for (let count = 89; count <= posts.length - 1; count++) {
                console.log('pushing into arrays');
                //pagePosts.push(posts[count]);
                setLazyLoadedPosts([...lazyLoadedPost, posts[count]]);
            }
            console.log('loaded posts', pagePosts);
            if (lazyLoadedPost.length == 100) {
                //setLazyLoadedPosts([...lazyLoadedPost, ...pagePosts]);
                setPageCount((pageCount) => pageCount += 1);
                setIsLoading(false);
            } else {
                setPageCount(pageCount);
                setIsLoading(true);
            }
        }
        console.log(lazyLoadedPost);
        return lazyLoadedPost;
    }

    async function fetchNextPage2() {
        // handle data fetch alt2
        let pagePosts: any[] = [];
        try {
            if (isLoading || !hasMorePosts) return;
            postPageMetadata.map((metadata) => {
                if (metadata.pageCount == pageCount) {
                    setIsLoading(true);
                    for (let i = metadata.startIndex; i <= metadata.stopIndex; i++) {
                        if (posts.length > 0) {
                            console.log('pushing into pagePosts...');
                            pagePosts.push(posts.flat()[i]);
                        } else {
                            console.log('posts state is empty');
                            return;
                        }
                        // update lazyloadedposts
                        if (pagePosts.length == 10) {
                            console.log('updating lazyloadedpost with page: ', pageCount);
                            console.log('pageposts: ', pagePosts);
                            setLazyLoadedPosts([...lazyLoadedPost, pagePosts]);
                            // update pageCount and loading state
                            if (lazyLoadedPost.length == metadata.stopIndex + 1 && pageCount < 10) {
                                setPageCount(pageCount => pageCount += 1);
                                setIsLoading(false);
                            }
                            // update hasMorePost
                            if (lazyLoadedPost.length == 100 && pageCount == 10) {
                                setHasMorePosts(false);
                            }
                        } else {
                            console.log(`problem updating lazyloadedpost with page ${pageCount}`);
                        }
                    }
                }
            })
        } catch (error) {
            console.log(`error fetching page: ${pageCount} | ${error}`);
        }
        return;
    }

    const handleIsLoading = () => {
        if (isLoading) {
            return <ActivityIndicator size={'large'} color={'green'} />;
        } else {
            return;
        }
    }

    function handleOffline() {
        console.log('device is offline! ...')
        let offlineInfo = 'error no internet available';
        setPosts([...posts, ...offlineInfo]);
        return;
    }

    useEffect(() => {
        async function runOnMount() {
            await handleFetchData();
            //await fetchNextPage();
            await fetchNextPage2();
            console.log("lazyLoad Post", lazyLoadedPost);
        }
        runOnMount();
    }, []);

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

            <Text>User List Data</Text>
            {
                lazyLoadedPost ?
                    <FlatList

                        data={lazyLoadedPost.length == 0 ? listData : lazyLoadedPost}
                        renderItem={({ item, index }) => {
                            return (
                                <UserView key={index} id={item.id} name={item.name} email={item.email} phone={item.phone} title={item.title} body={item.body} />
                            )
                        }}
                        keyExtractor={(item => item.id)}
                        // onEndReached prop expect a function that fetches new list data page
                        onEndReached={fetchNextPage2}
                        onEndReachedThreshold={0.2}
                        ListHeaderComponent={<Text style={{ textAlign: "center" }}>Lazy Loaded List</Text>}
                        ListFooterComponent={handleIsLoading}
                    />
                    : <Text>no posts available</Text>
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
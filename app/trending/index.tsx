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
    const [users, setUsers] = useState<any>([]);
    const [lazyLoadUser, setLazyLoadUsers] = useState<any>([])
    const [pageCount, setPageCount] = useState<number>(0);

    // function to handle fetching next list page
    function fetchNextPage() {

    }
    useEffect(() => {
        async function fetchUserData() {
            try {
                window.addEventListener('offline', () => {
                    let offlineInfo = 'error no internet available'
                    setUsers([...users, offlineInfo]);
                    return;
                })
                let usersEndpoint = 'https://jsonplaceholder.typicode.com/users'
                let postsEndpoint = 'https://jsonplaceholder.typicode.com/posts';
                const res = await fetch(postsEndpoint);
                const data = await res.json();
                if (data.length > 0) {
                    console.log("data", data);
                    setUsers([...users, data]);
                    return;
                } else {
                    let fetchingErrorInfo = 'error or no users data available';
                    setUsers([...users, fetchingErrorInfo]);
                    return;
                }
            } catch (err) {
                console.error('fetching error: ', err);
            }
        }
        fetchUserData();
        console.log("users", users[0]);
    }, [])
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
                users.length > 0 ?
                    <FlatList

                        data={users[0]}
                        renderItem={({ item, index }) => {
                            return (
                                <UserView id={item.id} name={item.title} email={item.email} phone={item.phone} title={item.title} body={item.body} />
                            )
                        }}
                    // onEndReached prop expect a function that fetches new list page
                    /> : <View>{users[0]}</View>
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
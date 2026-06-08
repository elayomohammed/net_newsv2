import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';

export default function Count() {
    // let [count, setCount] = useState<number>(0);
    // let [names, setNames] = useState<string[]>(['member1', 'member2']);

    // Number state variable
    let [count, setCount] = useState<Number | any>(0);

    // String state variable
    const [message, setMessages] = useState<string>('Initial message');

    // Boolean state variable
    const [isMessageModalOpean, setIsMessageModalOpen] = useState<boolean>(false);

    // Array state variable
    const [items, setItems] = useState<string[]>(['apple', 'banana']);

    // Object state variable
    type StudentInfo = {
        isLoggedIn: boolean;
        id: number;
    }
    const [studentInfo, setStudentInfo] = useState<StudentInfo | any>({
        isLoggedIn: false,
        id: 12345,
    })

    function IncrementCount() {
        return setCount(count += 1)
    }

    function DecrementCount() {
        return setCount(count -= 1)
    }

    // Handle string input state message
    function handleMessageUpdate(event: any) {
        event.preventDefault();
        const message = event.target.message.value;
        setMessages(message);
    }

    // Handle mesage Modal visbility
    function handleMessageModal() {
        return setIsMessageModalOpen(!isMessageModalOpean);
    }

    // Handle Array input state message
    function handleItemsArrayUpdate(event: any) {
        event.preventDefault();
        const item = event.target.item.value;
        setItems([...items, item]);
    }

    // Handle Object State variable Update
    function handleToggleLoginStatus() {
        // setStudentInfo(studentInfo.isLoggedIn ? true : false);
        setStudentInfo({ ...studentInfo, isLoggedIn: studentInfo.isLoggedIn ? false : true });
    }

    // function handleIncrementCount() {
    //     return setCount(count += 1);
    // }

    // function handleDecrementCount() {
    //     return setCount(count -= 1);
    // }

    // async function handleNameInput(event: any) {
    //     let name = event.target.value;
    //     await setNames([...names, name])
    // }

    // // update member1
    // async function updateMember1() {
    //     setNames((names) => names.map((name, index) => (index === 0 ? 'new updated member 1' : name)));
    // }

    return (
        <View>
            {/* <Text>State of count is currently: {count}</Text>
            <Pressable onPress={handleIncrementCount}>
                <Text>Increment Count</Text>
            </Pressable>
            <Pressable onPress={handleDecrementCount}>
                <Text>Decrement Count</Text>
            </Pressable> */}

            {/* <section>
                <input type='text' onChange={(event => handleNameInput(event))} />
                <View>
                    {
                        names.map((name, index) => {
                            return (
                                <Text key={index}>{name}</Text>
                            )
                        })
                    }
                </View>
                <Pressable onPress={updateMember1}>Update Member1</Pressable>
                <Pressable>Update Member2</Pressable>
            </section> */}
            <section>
                <h1>Number state variable</h1>
                <Text>Count: {count}</Text>
                <Pressable onPress={IncrementCount}>
                    <Text>Increment Count</Text>
                </Pressable>
                <Pressable onPress={DecrementCount}>
                    <Text>Decrement Count</Text>
                </Pressable>
                <br />
                <h1>String state variable</h1>
                <form onSubmit={(event => handleMessageUpdate(event))}>
                    <input type='text' name='message' />
                    <input type='submit' value="update message" />
                </form>
                {isMessageModalOpean ? <Text>{message}</Text> : <></>}

                <br />
                <h1>Boolean state variable</h1>
                <Pressable onPress={handleMessageModal}>
                    <Text>Show/Hide message modal</Text>
                </Pressable>

                <br />
                <h1>Array state variable</h1>
                <form onSubmit={(event => handleItemsArrayUpdate(event))}>
                    <input type='text' name='item' placeholder='enter an item' />
                    <input type='submit' value="update items" />
                </form>
                {
                    items.map((item, index) => {
                        return (
                            <ul>
                                <li key={index}>{item}</li>
                            </ul>
                        )
                    })
                }

                <h1>Object State Variable</h1>
                <Pressable onPress={handleToggleLoginStatus}>
                    <Text>{studentInfo.isLoggedIn ? "Log out" : "Log in"}</Text>
                </Pressable>
                {
                    studentInfo.isLoggedIn ? <Text>{studentInfo.id}</Text> : <></>
                }
            </section>
        </View>
    )
}
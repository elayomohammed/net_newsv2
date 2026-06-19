import { View, Text } from 'react-native'

type UserViewProps = {
    id: number;
    name?: string;
    email?: string;
    phone?: number;
    title?: string;
    body?: string;
}
export default function UserView({ id, name, email, phone, title, body }: UserViewProps) {
    return (
        <View>
            <Text>User ID: {id}</Text>
            {
                name ?
                    <View>
                        <Text>Name: {name}</Text>
                        <Text>Email: {email}</Text>
                        <Text>Phone: {phone}</Text>
                    </View>
                    : ''
            }
            {
                title ?
                    <View>
                        <Text>Title: {title}</Text>
                        <Text>Body: {body}</Text>
                    </View>
                    : ''
            }
        </View>
    )
}
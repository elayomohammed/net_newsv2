import { Ionicons, FontAwesome } from "@expo/vector-icons";

type tabProps = {
    name: string | any;
    size: number;
    color: any;
}

export default function TabBar({ name, size, color }: tabProps) {
    return (<Ionicons name={name} size={size} color={color} />)
}
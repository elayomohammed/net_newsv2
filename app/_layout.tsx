import { Tabs } from "expo-router";
import TabBar from "../components/TabBar";
import { Ionicons } from "@expo/vector-icons";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer'

export default function RootLayout() {
  let size = 18;
  return (
    // <Tabs screenOptions={{
    //   headerStyle: { backgroundColor: 'orange' },
    //   headerTintColor: 'black',
    //   headerTitleStyle: { fontSize: 18, fontWeight: '900' },
    //   headerShown: true,
    //   tabBarActiveTintColor: 'orange',
    //   tabBarInactiveTintColor: '#808080',
    // }}>
    //   <Tabs.Screen name='index' options={{ title: 'Home', tabBarIcon: ({ color }) => (<Ionicons name='home' color={color} size={size} />) }} />
    //   <Tabs.Screen name='explore' options={{ title: 'Explore', tabBarIcon: ({ color }) => (<TabBar name='compass-sharp' size={size} color={color} />) }} />
    //   <Tabs.Screen name='trending' options={{ title: 'Trending', tabBarIcon: ({ color }) => (<TabBar name='trending-up-sharp' size={size} color={color} />) }} />
    //   <Tabs.Screen name='partners' options={{ title: 'Partners', tabBarIcon: ({ color }) => (<TabBar name='people-sharp' size={size} color={color} />) }} />
    // </Tabs>

    <GestureHandlerRootView>
      <Drawer screenOptions={{
        headerStyle: { backgroundColor: 'orange' },
        headerTintColor: 'black',
        headerTitleStyle: { fontSize: 18, fontWeight: '900' },
        headerShown: true,
        drawerPosition: 'right',
        drawerActiveTintColor: 'orange',
        drawerInactiveTintColor: '#808080',
        drawerActiveBackgroundColor: 'orange',
        drawerInactiveBackgroundColor: '#f7f3f3'
      }}>
        <Drawer.Screen name='index' options={{ title: 'Home', drawerIcon: ({ color }) => (<Ionicons name='home' color={color} size={size} />) }} />
        <Drawer.Screen name='explore' options={{ title: 'Explore', drawerIcon: ({ color }) => (<TabBar name='compass-sharp' size={size} color={color} />) }} />
        <Drawer.Screen name='trending' options={{ title: 'Trending', drawerIcon: ({ color }) => (<TabBar name='trending-up-sharp' size={size} color={color} />) }} />
        <Drawer.Screen name='partners' options={{ title: 'Partners', drawerIcon: ({ color }) => (<TabBar name='people-sharp' size={size} color={color} />) }} />
      </Drawer>
    </GestureHandlerRootView>
  );
}

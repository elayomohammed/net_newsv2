import { useState, useContext } from "react";
import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import { TrendingNewsContext } from "@/context/context";

// Custorm trending news hook
const useTrendingNewsContext = () => {
    let trendingNewsContext;
    try {
        trendingNewsContext = useContext(TrendingNewsContext);
        if (!trendingNewsContext) return console.error('context must be used inside trending news context provider');
    } catch (err) {
        console.error('error: ', err);
    }
    return trendingNewsContext;
}
export default function TrendingTabs() {
    const [trendingNews, setTrendingNews] = useState({
        id: 456546,
        title: null,
        description: null,
        content: null
    })

    // utility functions for managing trending news context
    async function updateTitle(_title: string | any) {
        setTrendingNews({ ...trendingNews, title: _title });
    }
    return (
        <TrendingNewsContext.Provider value={{ trendingNews, updateTitle, setTrendingNews }}>
            <Tabs screenOptions={{
                headerShown: false
            }}>
                <Tabs.Screen name='index' options={{ title: 'Home', tabBarIcon: () => <FontAwesome name='home' size={18} /> }} />
                <Tabs.Screen name='sport' options={{ title: 'Sport', tabBarIcon: () => <FontAwesome name='soccer-ball-o' size={18} /> }} />
                <Tabs.Screen name='politics' options={{ title: 'Politics', tabBarIcon: () => <FontAwesome name='gavel' size={18} /> }} />
                <Tabs.Screen name='entertainment' options={{ title: 'Entertainments', tabBarIcon: () => <FontAwesome name='film' size={18} /> }} />
            </Tabs>
        </TrendingNewsContext.Provider>
    )
}

export { useTrendingNewsContext };
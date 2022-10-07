import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { HomeScreen, SettingsScreen } from 'app/screens/index'

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const BottomTab = createBottomTabNavigator();

const MainTab = () => {

    const screenOptions = ({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
                iconName = focused
                    ? 'home'
                    : 'home-outline';
            } else if (route.name === 'Settings') {
                iconName = focused ? 'cog' : 'cog-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
    })

    return (
        <SafeAreaProvider>
            <BottomTab.Navigator
                initialRouteName='Home'
                screenOptions={screenOptions}
            >
                <BottomTab.Screen name="Home" component={HomeScreen} />
                <BottomTab.Screen name="Settings" component={SettingsScreen} />
            </BottomTab.Navigator>
        </SafeAreaProvider>
    );
};

export default MainTab;
import React from 'react';

import { InitializationScreen } from 'app/screens/index';
import MainNavigationScreen from './main-tab';
import { LoginScreen } from 'app/screens';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
const MainStack = createNativeStackNavigator();

const AppNavigation = () => {

    return (
        <MainStack.Navigator
            initialRouteName='InitializationScreen'
            screenOptions={{ headerShown: false }}
        >
            <MainStack.Screen name="InitializationScreen" component={InitializationScreen} />
            <MainStack.Screen name="MainNavigationScreen" component={MainNavigationScreen} />
            <MainStack.Screen name="LoginScreen" component={LoginScreen} />
        </MainStack.Navigator>
    );
};

export default AppNavigation;
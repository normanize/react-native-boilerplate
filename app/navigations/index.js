import React, { useEffect } from 'react';

import { 
    InitializationScreen,
    LoginScreen,
    RegisterScreen
} from 'app/screens';
import MainNavigationScreen from './main-tab';

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
            <MainStack.Screen name="RegisterScreen" component={RegisterScreen} />
        </MainStack.Navigator>
    );
};

export default AppNavigation;
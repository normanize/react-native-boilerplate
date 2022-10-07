import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native'

import Lottie from 'lottie-react-native';

import styles from './styles'

const InitializatinScreen = () => {

    const { reset } = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            resetNavigation()
        }, 2000)
    }, [])

    const resetNavigation = () => {
        reset({
            routes: [{ name: 'MainNavigationScreen' }],
        });
    }

    return (
        <Lottie
            source={require('app/assets/animations/splashscreen.json')}
            autoPlay
            loop={false}
            style={styles.animationStyle}
        />
    );
};

export default InitializatinScreen;
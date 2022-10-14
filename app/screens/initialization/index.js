import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native'

import { SettingsTypes } from 'app/store'
import { biometryIsSensorAvailable, biometryPrompt, getStorageData, exitApp } from 'app/utilities'

import { Platform } from 'react-native';
import Lottie from 'lottie-react-native';
import styles from './styles'

const InitializatinScreen = () => {

    const dispatch = useDispatch()

    const { reset } = useNavigation();

    useEffect(() => {
        init()
    }, [])

    /**
     * This method will handle the 
     * initialization of the app
     */
    const init = async () => {
        // check biometry sensor
        const sensor = await biometryIsSensorAvailable();

        dispatch({
            type: SettingsTypes.SET_BIOMETRIC_SENSOR_AVAILABLE,
            payload: {
                available: sensor.available,
                type: sensor.available ? sensor.type : null
            }
        })

        if (sensor.available) {
            const {
                success: isEnabledSuccess,
                data: isEnabled
            } = await getStorageData(
                'settings_biometric_enabled'
            );

            const {
                success: isTypeSuccess,
                data: type
            } = await getStorageData(
                'settings_biometric_type'
            );

            if (
                isEnabledSuccess &&
                isTypeSuccess &&
                type === sensor.type
            ) {
                biometryVerification()
            } else {
                setTimeout(() => {
                    resetNavigation()
                }, 2500)
            }
        } else {
            setTimeout(() => {
                resetNavigation()
            }, 2500)
        }
    }

    /**
     * This method will run once if 
     * the biometry sensor is available 
     * and enable in the settings
     */
    const biometryVerification = async () => {
        const { success } = await biometryPrompt()
        if (success) {
            setTimeout(() => {
                resetNavigation()
            }, 1000)
        } else {
            if (Platform.OS === 'android') {
                exitApp()
            } else {
                biometryVerification()
            }
        }
    }

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
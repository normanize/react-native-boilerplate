import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { SettingsTypes } from 'app/store'
import { getStorageData, storeStorageData, biometryIsSensorAvailable } from 'app/utilities'

import { BIOMETRIC_LOGIN_TEXT } from 'app/constants'

import { View, Text } from 'react-native';
import { ToggleSwitch } from 'app/components'
import styles from './styles'

const BiometricSettings = () => {
    const {
        biometricEnable,
        biometricSensorType,
        biometricIsSensorAvailable
    } = useSelector(state => state.settings);

    const dispatch = useDispatch();

    /**
     * This effect will run once 
     * during the initialization of the screen
     */
    useEffect(() => {
        init()
    }, [])

    const init = async () => {
        const response = await getStorageData('settings_biometric');
        if (response && response.success) {
            dispatch({
                type: SettingsTypes.SET_BIOMETRIC,
                payload: response.data ? response.data : false
            })
        }
    }

    /**
     * This method will handle the 
     * changes of the biometric enable/disable
     */
    const onSwitch = async (e) => {
        if (!biometricIsSensorAvailable) {
            return;
        }

        const { success: enableSuccess } = await storeStorageData(
            'settings_biometric_enabled',
            e
        );
        const { success: typeSuccess } = await storeStorageData(
            'settings_biometric_type',
            biometricSensorType
        );

        if (enableSuccess && typeSuccess) {
            dispatch({
                type: SettingsTypes.SET_BIOMETRIC,
                payload: e
            })
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{BIOMETRIC_LOGIN_TEXT}</Text>
            <ToggleSwitch
                onChange={onSwitch}
                value={biometricEnable}
            />
        </View>
    );
};

export default BiometricSettings
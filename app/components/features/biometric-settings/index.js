import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { SettingsTypes } from 'app/store'
import { getStorageData, storeStorageData } from 'app/utilities'

import { View, Text } from 'react-native';
import { ToggleSwitch } from 'app/components'

import styles from './styles'

const BiometricSettings = () => {
    const { biometric } = useSelector(state => state.settings);

    const dispatch = useDispatch();

    /**
     * This effect will run once 
     * during the initialization of the screen
     */
    useEffect(() => {
        (async () => {
            const response = await getStorageData('settings_biometric');
            if (response.success) {
                dispatch({
                    type: SettingsTypes.SET_BIOMETRIC,
                    payload: response.data ? response.data : false
                })
            }
        })()
    }, [])

    /**
     * This method will handle the 
     * changes of the biometric enable/disable
     */
    const onSwitch = async (e) => {
        const response = await storeStorageData('settings_biometric', e);
        if (response.success) {
            dispatch({
                type: SettingsTypes.SET_BIOMETRIC,
                payload: e
            })
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Biometric</Text>
            <ToggleSwitch
                onChange={onSwitch}
                value={biometric}
            />
        </View>
    );
};

export default BiometricSettings
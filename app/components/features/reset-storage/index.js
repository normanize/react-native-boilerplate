import React from 'react';
import { Text, TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux';
import { SettingsTypes } from 'app/store'
import { resetStorageData } from 'app/utilities'

import styles from './styles'

const ResetStorage = () => {

    const dispatch = useDispatch();

    /**
     * This method will handle resetting
     * the configurations and settings
     */
    const onReset = async () => {
        const response = await resetStorageData()
        if (response && response.success) {
            dispatch({
                type: 'RESET'
            })

            // write some alert message here
            alert('success')
        }
    }

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={onReset}
        >
            <Text style={styles.title}>Reset Data</Text>
            <Text style={styles.description}>Reset configurations and settings</Text>
        </TouchableOpacity>
    );
};

export default ResetStorage
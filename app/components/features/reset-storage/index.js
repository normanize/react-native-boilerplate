import React from 'react';
import { Text, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { SettingsTypes } from 'app/store'

import {
    resetStorageData,
    successMessage,
    dismissMessage,
    biometryIsSensorAvailable
} from 'app/utilities'

import {
    RESET_DATA_TEXT,
    SUCCESS_RESET_DATA_MSG,
    RESET_DATA_ALERT_TEXT,
    RESET_CONFIRM_TEXT
} from 'app/constants'

import { ConfirmAlert } from 'app/components'
import styles from './styles'

const ResetStorage = () => {

    const { showResetDataAlert } = useSelector(state => state.settings)

    const dispatch = useDispatch();

    const onReset = async () => {
        dispatch({
            type: SettingsTypes.SET_RESET_DATA_ALERT,
            payload: true
        })
    }

    const cancelReset = () => {
        dispatch({
            type: SettingsTypes.SET_RESET_DATA_ALERT,
            payload: false
        })
    }

    /**
     * This method will handle resetting
     * the configurations and settings
     */
    const confirmDelete = async () => {
        const response = await resetStorageData()
        if (response && response.success) {
            dispatch({ type: 'RESET' });

            reinitializeSetting();

            successMessage(SUCCESS_RESET_DATA_MSG);
            await new Promise(resolve => setTimeout(resolve, 1500));
            dismissMessage();
        }
    }

    const reinitializeSetting = async () => {
        // check biometry sensor
        const sensor = await biometryIsSensorAvailable();
        if (sensor.available) {
            dispatch({
                type: SettingsTypes.SET_BIOMETRIC_SENSOR_AVAILABLE,
                payload: {
                    available: sensor.available,
                    type: sensor.available ? sensor.type : null
                }
            })
        }
    }

    return (
        <React.Fragment>
            {showResetDataAlert &&
                <ConfirmAlert
                    type={'reset'}
                    show={showResetDataAlert}
                    title={RESET_DATA_ALERT_TEXT.TITLE}
                    message={RESET_DATA_ALERT_TEXT.MESSAGE}
                    onCancel={cancelReset}
                    onConfirm={confirmDelete}
                />
            }

            <TouchableOpacity
                style={styles.container}
                onPress={onReset}
            >
                <Text style={styles.title}>{RESET_DATA_TEXT.TITLE}</Text>
                <Text style={styles.description}>{RESET_DATA_TEXT.DESCRIPTION}</Text>
            </TouchableOpacity>
        </React.Fragment>
    );
};

export default ResetStorage
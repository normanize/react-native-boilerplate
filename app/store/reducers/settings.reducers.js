import { createReducer } from 'reduxsauce';

import { SettingsTypes } from 'app/store/actions';
import { SETTINGS_INITIAL_STATE } from 'app/store/states';

/* ------------- Reducers ------------- */

export const setBiometric = (state, { payload }) => {
    return {
        ...state,
        biometricEnable: payload,
    };
};

export const setBiometricSensorAvailable = (state, { payload }) => {
    const { available, type } = payload
    return {
        ...state,
        biometricSensorType: type,
        biometricIsSensorAvailable: available
    };
};


export const setResetDataAlert = (state, { payload }) => {
    return {
        ...state,
        showResetDataAlert: payload,
    };
};

/* ------------- Hookup Reducers To Types ------------- */

export const settingsReducer = createReducer(SETTINGS_INITIAL_STATE, {
    [SettingsTypes.SET_BIOMETRIC]: setBiometric,
    [SettingsTypes.SET_BIOMETRIC_SENSOR_AVAILABLE]: setBiometricSensorAvailable,
    [SettingsTypes.SET_RESET_DATA_ALERT]: setResetDataAlert,
});

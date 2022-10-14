import { APP_CONFIG } from 'config/dev'

/* ------------- Initial State ------------- */

export const SETTINGS_INITIAL_STATE = {
    biometricEnable: false,
    biometricIsSensorAvailable: false,
    biometricSensorType: null,
    appVersion: APP_CONFIG.version,

    // alert
    showResetDataAlert: false
};

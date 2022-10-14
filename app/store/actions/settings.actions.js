import { createActions } from 'reduxsauce';

const { Types: SettingsTypes, Creators: SettingsActions } = createActions({
    setBiometric: ['payload'],
    setBiometricSensorAvailable: ['payload'],
    setResetDataAlert: ['payload'],
});

export { SettingsTypes, SettingsActions };

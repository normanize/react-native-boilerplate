import { createActions } from 'reduxsauce';

const { Types: SettingsTypes, Creators: SettingsActions } = createActions({
    setBiometric: ['payload'],
    setResetDataAlert: ['payload'],
});

export { SettingsTypes, SettingsActions };

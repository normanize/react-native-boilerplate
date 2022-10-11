import { createActions } from 'reduxsauce';

const { Types: SettingsTypes, Creators: SettingsActions } = createActions({
    setBiometric: ['payload'],
});

export { SettingsTypes, SettingsActions };

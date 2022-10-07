import { createActions } from 'reduxsauce';

const { Types: AppConfigTypes, Creators: AppConfigActions } = createActions({
    setLoadingScreen: ['payload'],
    setAppMaintenance: ['payload']
});

export { AppConfigTypes, AppConfigActions };

import { createReducer } from 'reduxsauce';

import { AppConfigTypes } from 'app/store/actions';
import { APP_CONFIG_INITIAL_STATE } from 'app/store/states';

/* ------------- Reducers ------------- */

export const setLoadingScreen = (state, { payload }) => {
    return {
        ...state,
        loading: payload,
    };
};

export const setAppMaintenance = (state, { payload }) => {
    return {
        ...state,
        maintenance: payload,
    };
};

/* ------------- Hookup Reducers To Types ------------- */

export const appConfigReducer = createReducer(APP_CONFIG_INITIAL_STATE, {
    [AppConfigTypes.SET_LOADING_SCREEN]: setLoadingScreen,
    [AppConfigTypes.SET_APP_MAINTENANCE]: setAppMaintenance,
});

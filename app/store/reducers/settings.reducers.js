import { createReducer } from 'reduxsauce';

import { SettingsTypes } from 'app/store/actions';
import { SETTINGS_INITIAL_STATE } from 'app/store/states';

/* ------------- Reducers ------------- */

export const setBiometric = (state, { payload }) => {
    return {
        ...state,
        biometric: payload,
    };
};

/* ------------- Hookup Reducers To Types ------------- */

export const settingsReducer = createReducer(SETTINGS_INITIAL_STATE, {
    [SettingsTypes.SET_BIOMETRIC]: setBiometric,
});

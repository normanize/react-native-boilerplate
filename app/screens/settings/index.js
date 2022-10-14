import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { AppConfigTypes, SettingsTypes } from 'app/store'

import { View, Text } from 'react-native';
import {
    PageLoader,
    ScrollContent,
    DisplayProfile,
    AppVersion,
    BiometricSettings,
    ResetStorage,
    NetworkState
} from 'app/components'

import styles from './styles';

const SettingsScreen = () => {

    const { loading } = useSelector(state => state.appConfig)
    const { biometricIsSensorAvailable } = useSelector(state => state.settings)

    const dispatch = useDispatch()

    useEffect(() => {
        init()
    }, [])

    const init = async () => {
        dispatch({
            type: AppConfigTypes.SET_LOADING_SCREEN,
            payload: true
        })

        setTimeout(() => {
            dispatch({
                type: AppConfigTypes.SET_LOADING_SCREEN,
                payload: false
            })
        }, 3000)
    }

    return (
        <View style={styles.container}>
            {loading
                ? <PageLoader />
                : (
                    <View style={styles.content}>
                        <ScrollContent>
                            <View style={styles.displayProfileContainer}>
                                <DisplayProfile />
                            </View>
                            {biometricIsSensorAvailable && <BiometricSettings />}
                            <ResetStorage />
                            <AppVersion />
                        </ScrollContent>

                        <NetworkState />
                    </View>
                )}
        </View>
    );
};

export default SettingsScreen;
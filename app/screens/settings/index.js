import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { AppConfigTypes } from 'app/store'

import { View, Text } from 'react-native';
import {
    PageLoader,
    ScrollableContent,
    DisplayProfile,
    AppVersion,
    BiometricSettings,
    ResetStorage
} from 'app/components'

import styles from './styles';

const SettingsScreen = () => {

    const {
        loading
    } = useSelector(state => state.appConfig)

    const dispatch = useDispatch()

    useEffect(() => {
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
    }, [])

    return (
        <View style={styles.container}>
            {loading
                ? <PageLoader />
                : (
                    <ScrollableContent>
                        <View style={styles.displayProfileContainer}>
                            <DisplayProfile />
                        </View>
                        <BiometricSettings />
                        <ResetStorage />
                        <AppVersion />
                    </ScrollableContent>
                )}
        </View>
    );
};

export default SettingsScreen;
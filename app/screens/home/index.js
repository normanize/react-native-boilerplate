import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { AppConfigTypes } from 'app/store'

import { View, Text } from 'react-native';

import { PageLoader } from 'app/components'

const HomeScreen = () => {

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
        }, 5000)
    }, [])

    return (
        <View>
            {loading
                ? <PageLoader />
                : (
                    <Text>Home screen</Text>
                )
            }
        </View>
    );
};

export default HomeScreen;
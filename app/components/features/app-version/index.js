import React from 'react';
import { useSelector } from 'react-redux';

import { APP_VERSION_TEXT } from 'app/constants'

import { View, Text } from 'react-native'
import styles from './styles'

const AppVersion = () => {

    const { appVersion } = useSelector(state => state.settings)

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{APP_VERSION_TEXT}</Text>
            <Text style={styles.rightItem}>{appVersion}</Text>
        </View>
    );
};

export default AppVersion
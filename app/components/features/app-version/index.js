import React from 'react';
import { useSelector } from 'react-redux';

import { View, Text } from 'react-native'
import styles from './styles'

const AppVersion = () => {

    const { appVersion } = useSelector(state => state.settings)

    return (
        <View style={styles.container}>
            <Text style={styles.title}>App Version</Text>
            <Text style={styles.rightItem}>{appVersion}</Text>
        </View>
    );
};

export default AppVersion
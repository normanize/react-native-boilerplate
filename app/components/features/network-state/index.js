import React from 'react';
import { View, Text } from 'react-native';
import { useNetInfo } from "@react-native-community/netinfo";

import styles from './styles'

const NetWorkState = () => {
    const netInfo = useNetInfo();

    return !netInfo.isConnected && (
        <View style={styles.container}>
            <Text style={styles.noConnection}>No internet connection.</Text>
        </View>
    );
};

export default NetWorkState;
import React from 'react';
import { View, Text } from 'react-native'

import { OptimizeImage } from 'app/components'

import styles from './styles'

const DisplayProfile = () => {
    return (
        <View style={styles.container}>
            <OptimizeImage
                style={styles.avatar}
                uri={'https://picsum.photos/200'}
            />
            <View style={styles.nameContainer}>
                <Text style={styles.name}>Guest</Text>
                <Text style={styles.signIn}>Sign in your account?</Text>
            </View>
        </View>
    );
};

export default DisplayProfile
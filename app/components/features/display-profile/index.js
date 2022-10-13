import React from 'react';
import { useNavigation } from '@react-navigation/native'
import { GUEST_TEXT, SIGN_IN_YOUR_ACCOUNT_TEXT } from 'app/constants'

import { View, Text, TouchableOpacity } from 'react-native'
import { OptimizeImage } from 'app/components'
import styles from './styles'

const DisplayProfile = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <OptimizeImage
                style={styles.avatar}
                uri={'https://picsum.photos/200'}
            />
            <View style={styles.nameContainer}>
                <Text style={styles.name}>{GUEST_TEXT}</Text>
                <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
                    <Text style={styles.signIn}>{SIGN_IN_YOUR_ACCOUNT_TEXT}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default DisplayProfile
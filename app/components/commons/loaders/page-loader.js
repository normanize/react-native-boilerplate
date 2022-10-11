import React from 'react';
import { View, Text, Modal } from 'react-native';
import Lottie from 'lottie-react-native';

const loader = require('app/assets/animations/page-loader.json')

import styles from './styles'

const PageLoader = () => {
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={true}
        >
            <View style={styles.pageLoaderContainer}>
                <Lottie
                    source={loader}
                    autoPlay
                    loop
                    style={styles.pageLoaderAnimation}
                />
            </View>
        </Modal>
    );
};

export default PageLoader;
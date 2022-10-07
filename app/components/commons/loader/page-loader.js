import React from 'react';
import { View, Text } from 'react-native';
import Lottie from 'lottie-react-native';

const loader = require('app/assets/animations/page-loader.json')

import styles from './styles'

const PageLoader = () => {
    return (
        <View style={styles.pageLoaderContainer}>
            <Lottie 
                source={loader} 
                autoPlay 
                loop 
                style={styles.pageLoaderAnimationStyle} 
            />
        </View>
    );
};

export default PageLoader;
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './styles'

const MainContent = ({ children, ...props }) => {
    return (
        <SafeAreaView style={styles.container} {...props}>
            {children}
        </SafeAreaView>
    );
};

export default MainContent;
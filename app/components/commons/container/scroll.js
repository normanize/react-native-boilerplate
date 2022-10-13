import React from 'react';
import { ScrollView } from 'react-native'

import styles from './styles';

const ScrollContent = ({
    horizontal = false,
    showsVerticalScrollIndicator = false,
    showsHorizontalScrollIndicator = false,
    children,
    ...props
}) => {
    return (
        <ScrollView
            {...{
                horizontal,
                showsVerticalScrollIndicator,
                showsHorizontalScrollIndicator,
            }}
            style={styles.scrollContainer}
            {...props}
        >
            {children}
        </ScrollView>
    );
};

export default ScrollContent;
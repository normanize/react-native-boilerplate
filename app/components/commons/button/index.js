import React from 'react';
import { TouchableOpacity } from 'react-native'

import styles from './styles'

const TouchableButton = ({ 
    color,
    children,
    containerStyle,
    ...props 
}) => {

    return (
        <TouchableOpacity
            style={[
                styles.container, 
                containerStyle, 
                color && styles[color]
            ]}
            {...props}
        >
            {children}
        </TouchableOpacity>
    );
};

export default TouchableButton;
import React from 'react';
import { Switch } from 'react-native';

import styles from './styles'

const ToggleSwitch = ({ value = false, onChange, ...props }) => {
    return (
        <Switch
            style={styles.custom}
            onValueChange={onChange}
            value={value}
            {...props}
        />
    );
};

export default ToggleSwitch;
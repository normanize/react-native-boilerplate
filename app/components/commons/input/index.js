import React from 'react';
import { Text, View, TextInput } from "react-native";
import { Controller } from "react-hook-form";

import styles from './styles'

const Input = ({
    name,
    control,
    rules,
    errors,
    placeholder,
    secureTextEntry = false,
    ...props
}) => {
    return (
        <View style={styles.container}>
            <Controller
                {...{
                    name,
                    control,
                    rules
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        placeholder={placeholder}
                        secureTextEntry={secureTextEntry}
                        {...props}
                    />
                )}
            />
            {errors[name] && <Text style={styles.error}>{errors[name].message}</Text>}
        </View>
    );
};

export default Input;
import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { useForm } from "react-hook-form";

import { View, Text, TouchableOpacity } from 'react-native'
import { MainContent, ScrollContent, Button, Input, NetworkState} from 'app/components'
import Ionicons from 'react-native-vector-icons/Ionicons'

import {
    LOGIN_TEXT,
    REGISTER_TEXT,
    LOGIN_HEADING_TEXT,
    LOGIN_EMAIL_ADDRESS_PLACEHOLDER,
    LOGIN_PASSWORD_PLACEHOLDER,
    LOGIN_DONT_HAVE_ACCOUNT_TEXT,
    PASSWORD_MINLENGTH,
    VALIDATION_MSG
} from 'app/constants'

import styles from './styles'

const Login = () => {

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: null,
            password: null
        }
    });

    const navigation = useNavigation()

    const onBackPressed = () => navigation.goBack()

    const onRegister = () => navigation.navigate('RegisterScreen')

    const onLogin = ({ email, password }) => {
        if (
            email === 'admin@gmail.com' &&
            password === 'secret'
        ) {
            // write some code to authenticate user
        }
    }

    return (
        <MainContent>
            <View style={styles.container}>
                <Ionicons name="arrow-back" size={25} onPress={onBackPressed} />
                <ScrollContent>
                    <View style={styles.content}>
                        <Text style={styles.heading}>{LOGIN_HEADING_TEXT}</Text>

                        <Input
                            {...{
                                control,
                                errors
                            }}
                            name="email"
                            placeholder={LOGIN_EMAIL_ADDRESS_PLACEHOLDER}
                            autoCapitalize={'none'}
                            rules={{
                                required: { value: true, message: VALIDATION_MSG.EMAIL_REQUIRED }
                            }}
                            style={styles.input}
                        />

                        <Input
                            {...{
                                control,
                                errors
                            }}
                            name="password"
                            placeholder={LOGIN_PASSWORD_PLACEHOLDER}
                            secureTextEntry={true}
                            autoCapitalize={'none'}
                            rules={{
                                required: { value: true, message: VALIDATION_MSG.PASSWORD_REQUIRED },
                                minLength: { value: 8, message: VALIDATION_MSG.PASSWORD_MINLENGTH }
                            }}
                            style={styles.input}
                        />

                        <Button style={styles.btnLogin} onPress={handleSubmit(onLogin)}>
                            <Text style={styles.btnText}>{LOGIN_TEXT}</Text>
                        </Button>

                        <Text style={styles.noAccountText}>{LOGIN_DONT_HAVE_ACCOUNT_TEXT}</Text>
                        <Button style={styles.btnRegister} onPress={onRegister}>
                            <Text style={styles.btnRegisterText}>{REGISTER_TEXT}</Text>
                        </Button>
                    </View>
                </ScrollContent>
            </View>
            <NetworkState />
        </MainContent>
    );
};

export default Login;
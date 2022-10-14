import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { useForm } from "react-hook-form";

import { View, Text, TouchableOpacity } from 'react-native'
import { MainContent, ScrollContent, Button, Input, NetworkState } from 'app/components'
import Ionicons from 'react-native-vector-icons/Ionicons'

import {
    LOGIN_TEXT,
    REGISTER_TEXT,
    REGISTER_HEADING_TEXT,
    REGISTER_NAME_PLACEHOLDER,
    REGISTER_EMAIL_ADDRESS_PLACEHOLDER,
    REGISTER_PASSWORD_PLACEHOLDER,
    SIGN_IN_YOUR_ACCOUNT_TEXT,
    VALIDATION_MSG
} from 'app/constants'

import styles from './styles'

const Register = () => {

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            name: null,
            email: null,
            password: null
        }
    });

    const navigation = useNavigation()

    const onBackPressed = () => navigation.goBack()

    const onRegister = ({ name, email, password }) => {
        // write some code to register the user
    }

    return (
        <MainContent>
            <View style={styles.container}>
                <Ionicons name="arrow-back" size={25} onPress={onBackPressed} />
                <ScrollContent>
                    <View style={styles.content}>
                        <Text style={styles.heading}>{REGISTER_HEADING_TEXT}</Text>

                        <Input
                            {...{
                                control,
                                errors
                            }}
                            name="name"
                            placeholder={REGISTER_NAME_PLACEHOLDER}
                            rules={{
                                required: { value: true, message: VALIDATION_MSG.NAME_REQUIRED }
                            }}
                            style={styles.input}
                        />

                        <Input
                            {...{
                                control,
                                errors
                            }}
                            name="email"
                            placeholder={REGISTER_EMAIL_ADDRESS_PLACEHOLDER}
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
                            placeholder={REGISTER_PASSWORD_PLACEHOLDER}
                            secureTextEntry={true}
                            autoCapitalize={'none'}
                            rules={{
                                required: { value: true, message: VALIDATION_MSG.PASSWORD_REQUIRED },
                                minLength: { value: 8, message: VALIDATION_MSG.PASSWORD_MINLENGTH },
                            }}
                            style={styles.input}
                        />

                        <Button style={styles.btnRegister} onPress={handleSubmit(onRegister)}>
                            <Text style={styles.btnRegisterText}>{REGISTER_TEXT}</Text>
                        </Button>

                        <Text style={styles.signInText}>{SIGN_IN_YOUR_ACCOUNT_TEXT}</Text>
                        <Button style={styles.btnLogin} onPress={onBackPressed}>
                            <Text style={styles.btnText}>{LOGIN_TEXT}</Text>
                        </Button>
                    </View>
                </ScrollContent>
            </View>

            <NetworkState />
        </MainContent>
    );
};

export default Register;
import { StyleSheet } from "react-native";
import { Radius } from 'app/assets/theme'
import { Colors } from 'app/assets/theme';

const styles = StyleSheet.create({
    // default button
    container: {
        padding: 10,
        alignItems: 'center',
        borderRadius: Radius.SM
    },
    default: {
        backgroundColor: Colors.DEFAULT
    },
    primary: {
        backgroundColor: Colors.PRIMARY
    },
    danger: {
        backgroundColor: Colors.DANGER
    },
    warning: {
        backgroundColor: Colors.WARNING
    },
    success: {
        backgroundColor: Colors.SUCCESS
    },
    info: {
        backgroundColor: Colors.INFO
    },
})

export default styles
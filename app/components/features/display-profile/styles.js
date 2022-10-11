import { StyleSheet } from 'react-native'
import { Margin, Padding, FontSize, Radius } from 'app/assets/theme'
import { Colors } from 'app/assets/theme'

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: Padding.SM
    },
    avatar: {
        width: 57,
        height: 57,
        borderRadius: Radius.ROUNDED,
        marginRight: Margin.SM
    },
    nameContainer: {
        marginLeft: Margin.SM
    },
    name: {
        fontSize: FontSize.SM,
        fontWeight: 'bold'
    },
    signIn: {
        color: Colors.GREY,
        fontSize: FontSize.XS,
        textDecorationLine: 'underline'
    }
})

export default styles
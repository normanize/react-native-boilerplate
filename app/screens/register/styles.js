import { StyleSheet } from 'react-native'
import { Colors, Padding, Margin, Radius, FontSize } from 'app/assets/theme'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: Padding.SM,
    },
    arrowBack: {
        marginTop: Margin.LG
    },
    content: {
        flex: 1,
        alignItems: 'center'
    },
    heading: {
        fontSize: FontSize.MD,
        fontWeight: '500',
        marginVertical: Margin.XXL
    },
    input: {
        width: 280,
        padding: Padding.MD,
        borderWidth: 1,
        borderColor: Colors.GREY,
        borderRadius: Radius.XS,
    },
    btnLogin: {
        marginTop: Margin.LG,
        paddingHorizontal: 118,
        paddingVertical: Padding.SM,
        borderWidth: 1,
        borderRadius: Radius.SM
    },
    btnText: {
        color: Colors.BLACK,
        fontWeight: 'bold'
    },
    signInText: {
        marginTop: Margin.XXXL
    },
    btnRegister: {
        marginTop: Margin.LG,
        paddingHorizontal: 110,
        paddingVertical: Padding.SM,
        backgroundColor: Colors.PRIMARY,
        borderColor: Colors.GREY,
        borderRadius: Radius.SM
    },
    btnRegisterText: {
        color: Colors.WHITE,
        fontWeight: 'bold'
    }
})

export default styles
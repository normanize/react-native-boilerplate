import { StyleSheet } from 'react-native'
import { Colors, Padding, Margin, Radius, FontSize } from 'app/assets/theme'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: Padding.SM,
    },
    content: {
        flex: 1,
        alignItems: 'center'
    },
    arrowBack: {
        marginTop: Margin.LG
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
        paddingHorizontal: 120,
        paddingVertical: Padding.SM,
        backgroundColor: Colors.PRIMARY,
        borderRadius: Radius.SM
    },
    btnText: {
        color: Colors.WHITE,
        fontWeight: 'bold'
    },
    noAccountText: {
        marginTop: Margin.XXXL
    },
    btnRegister: {
        marginTop: Margin.LG,
        paddingHorizontal: 110,
        paddingVertical: Padding.SM,
        borderWidth: 1,
        borderColor: Colors.GREY,
        borderRadius: Radius.SM
    },
    btnRegisterText: {
        color: Colors.BLACK,
        fontWeight: 'bold'
    }
})

export default styles
import { StyleSheet } from 'react-native'
import { Colors, FontSize, Padding } from 'app/assets/theme'

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: Padding.XS,
        backgroundColor: 'red'
    },
    noConnection: {
        color: Colors.WHITE,
        fontSize: FontSize.XXS
    }
})

export default styles
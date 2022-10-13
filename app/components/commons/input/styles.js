import { StyleSheet } from 'react-native'
import { Colors, Padding, FontSize } from 'app/assets/theme'

const styles = StyleSheet.create({
    container: {
        paddingVertical: Padding.SM
    },
    error: {
        color: Colors.DANGER,
        fontSize: FontSize.XS
    }
})

export default styles
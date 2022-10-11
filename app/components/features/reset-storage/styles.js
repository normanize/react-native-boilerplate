import { StyleSheet } from 'react-native'
import { FontSize, Padding } from 'app/assets/theme'
import { Colors } from 'app/assets/theme'

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        padding: Padding.MD
    },
    title: {
        fontSize: FontSize.SM,
        fontWeight: '500',
    },
    description: {
        fontSize: FontSize.XXS
    }
})

export default styles
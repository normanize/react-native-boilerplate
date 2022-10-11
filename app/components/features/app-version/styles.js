import { StyleSheet } from 'react-native'
import { Margin, Padding, FontSize, Radius } from 'app/assets/theme'
import { Colors } from 'app/assets/theme'

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: Padding.MD
    },
    title: {
        fontSize: FontSize.MD,
        fontWeight: '500'
    },
    rightItem: {
        fontSize: FontSize.MD,
        marginRight: Margin.MD
    }
})

export default styles
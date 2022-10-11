import { StyleSheet } from 'react-native'
import { Colors, Padding } from 'app/assets/theme'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE
    },
    displayProfileContainer: {
        paddingVertical: Padding.MD,
        borderColor: Colors.DEFAULT,
        borderBottomWidth: 1
    }
})

export default styles
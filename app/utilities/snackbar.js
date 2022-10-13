import Snackbar from 'react-native-snackbar';

export const successMessage = (message) => Snackbar.show({
    text: message,
    duration: Snackbar.LENGTH_LONG
});

export const dismissMessage = () => Snackbar.dismiss()

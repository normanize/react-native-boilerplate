import { Platform } from 'react-native'
import { BIOMETRY_PROMPT_TEXT } from 'app/constants'
import FingerprintScanner from 'react-native-fingerprint-scanner';

export const biometryIsSensorAvailable = async () => {
    return await FingerprintScanner
        .isSensorAvailable()
        .then(biometryType => {
            return { available: true, type: biometryType }
        })
        .catch(error => {
            return { available: false }
        });
}

export const biometryPrompt = async () => {
    return await FingerprintScanner
        .authenticate({ description: BIOMETRY_PROMPT_TEXT })
        .then((success) => {
            return { success: true, success }
        })
        .catch((error) => {
            return { success: false, error }
        });
}
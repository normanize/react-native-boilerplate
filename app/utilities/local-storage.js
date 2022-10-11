import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Saving the data in localstorage
 * @param key string
 * @param value json
 * @returns 
 */
export const storeStorageData = async (key, value) => {
    try {
        AsyncStorage.setItem(key, JSON.stringify(value))
        return {
            success: true,
            data: value
        }
    } catch (e) {
        return {
            error: true,
            message: "Failed to store the data from storage."
        }
    }
}

/**
 * Getting the data from localstorage
 * @param key string
 * @returns 
 */
export const getStorageData = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key)
        if (value !== null) {
            return {
                success: true,
                data: JSON.parse(value)
            }
        }
    } catch (e) {
        return {
            error: true,
            message: "Failed to get the data from storage."
        }
    }
}

/**
 * Reset all localstorage data
 * @param key string
 * @returns 
 */
export const resetStorageData = async (key) => {
    try {
        await AsyncStorage.clear()
        return { success: true }
    } catch (e) {
        return {
            error: true,
            message: "Failed to reset all storage data."
        }
    }
}
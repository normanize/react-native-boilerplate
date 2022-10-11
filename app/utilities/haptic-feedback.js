import ReactNativeHapticFeedback from "react-native-haptic-feedback";

const IMPACT = 'impactLight'

const OPTIONS = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: true
};

/**
 * Trigger haptic feedback
 * @returns void
 */
export const trigger = () => ReactNativeHapticFeedback.trigger(IMPACT, OPTIONS);
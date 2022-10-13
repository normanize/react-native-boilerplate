import React, { useMemo } from 'react';

import AwesomeAlert from 'react-native-awesome-alerts';
import { 
  ALERT_OPTIONS,
  CANCEL_TEXT, 
  RESET_CONFIRM_TEXT, 
  DELETE_CONFIRM_TEXT
} from 'app/constants'

const confirm = ({
  show,
  type,
  title,
  message,
  onCancel,
  onConfirm
}) => {

  const confirmText = useMemo(() => {
    switch (type) {
      case ALERT_OPTIONS.RESET:
        return RESET_CONFIRM_TEXT
      default:
        return DELETE_CONFIRM_TEXT
    }
  }, [])

  return (
    <AwesomeAlert
      {...{
        show,
        title,
        message,
      }}
      showProgress={false}
      closeOnTouchOutside={true}
      closeOnHardwareBackPress={false}
      showCancelButton={true}
      showConfirmButton={true}
      cancelText={CANCEL_TEXT}
      confirmText={confirmText}
      confirmButtonColor="#DD6B55"
      onCancelPressed={onCancel}
      onConfirmPressed={onConfirm}
    />
  );
};

export default confirm;
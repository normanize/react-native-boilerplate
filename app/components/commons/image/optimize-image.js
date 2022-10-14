import React from 'react';
import FastImage from 'react-native-fast-image'

const OptimizeImage = ({ 
    uri,
    priority = FastImage.priority.normal,
    resizeMode = FastImage.resizeMode.contain,
    ...props
}) => {
    return (
        <FastImage
            source={{
                uri,
                priority,
                resizeMode,
            }}
            {...props}
        />
    );
};

export default OptimizeImage;
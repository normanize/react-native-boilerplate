import React from 'react';
import { ScrollView } from 'react-native'

const ScrollableContent = ({ 
    horizontal = false,
    showsVerticalScrollIndicator = false,
    showsHorizontalScrollIndicator = false,
    children, 
    ...props 
}) => {
    return (
        <ScrollView
            {...{
                horizontal,
                showsVerticalScrollIndicator,
                showsHorizontalScrollIndicator
            }}
            {...props}
        >
            {children}
        </ScrollView>
    );
};

export default ScrollableContent;
import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

const IconText = props => {
    const { viewStyle, textStyle, icon, text } = props;

    return (
        <View style={viewStyle}>
            <Feather name={icon} size={50} color='white'/>
            <Text style={textStyle}>{text}</Text>
        </View>
    );

};

export default IconText;

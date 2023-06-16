import React from 'react';
import {
    View,
    Text
} from 'react-native';

const RowText = props => {
    const { viewStyle, upperTextStyle, lowerTextStyle, upperText, lowerText } = props;

    return (
        <View style={viewStyle}>
          <Text style={upperTextStyle}>{upperText}</Text>
          <Text style={lowerTextStyle}>{lowerText}</Text>
        </View>
    );
};

export default RowText;

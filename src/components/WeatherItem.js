import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { weatherType } from '../utils/weatherType';
import moment from 'moment';

const WeatherItem = props => {
    const { dt_txt, min, max, condition } = props;

    const { date, temp } = styles;

    return (
        <View style={styles.item}>
            <Feather name={weatherType[condition]?.icon} size={25} color='black'/>
            <View>
                <Text style={date}>{moment(dt_txt).format('dddd')} </Text>
                <Text style={date}>{moment(dt_txt).format('h:mm:ss a')} </Text>
            </View>
            <Text style={temp}>{`${Math.round(min)}°/${Math.round(max)}°`} </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderWidth: 5,
        backgroundColor: 'indianred'
    },
    temp: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    date: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold'
    }
});

export default WeatherItem;

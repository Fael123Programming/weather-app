import React from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Dimensions,
} from 'react-native';
import IconText from '../components/IconText';
import moment from 'moment';

const City = ({ cityData }) => {
    const { 
        container, 
        image, 
        city, 
        countryStyle, 
        place, 
        info, 
        rowContainer, 
        rowGroup 
    } = styles;

    const { name, country, population, sunrise, sunset } = cityData;

    return (
        <SafeAreaView styles={container}>
            <ImageBackground
                source={require('../../assets/city.jpg')}
                style={image}
            >
                <Text style={[place, city]}>{name}</Text>
                <Text style={[place, countryStyle]}>{country}</Text>
                <IconText
                    icon='user'
                    viewStyle={rowContainer}
                    textStyle={info}
                    text={`Population: ${population}`}
                />
                <View style={rowGroup}>
                    <IconText
                        icon='sunrise'
                        viewStyle={rowContainer}
                        textStyle={info}
                        text={moment(sunrise).format('h:mm:ss a')}
                    />
                    <IconText
                        icon='sunset'
                        viewStyle={rowContainer}
                        textStyle={info}
                        text={moment(sunset).format('h:mm:ss a')}
                    />
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        opacity: .9,
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height,
        // marginTop: StatusBar.currentHeight || 0
    },
    place: {
        justifyContent: 'center',
        fontWeight: 'bold',
        color: 'black',
        fontFamily: 'serif',
        alignSelf: 'center',
    },
    city: {
        fontSize: 40,
    },
    countryStyle: {
        fontSize: 30,
    },
    rowContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: 30
    },
    info: {
        fontSize: 25,
        fontWeight: '500',
        color: 'white'
    },
    rowGroup: {
        flex: 3,
        alignItems: 'center',
        flexDirection: 'row',
    }
});

export default City;

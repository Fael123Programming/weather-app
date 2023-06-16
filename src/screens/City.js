import React from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Dimensions,
    StatusBar
} from 'react-native';
import IconText from '../components/IconText';

const City = () => {

    const { container, image, city, country, place, info, rowContainer, rowGroup } = styles;

    return (
        <SafeAreaView styles={container}>
            <ImageBackground
                source={require('../../assets/city.jpg')}
                style={image}
            >
                <Text style={[place, city]}>Bragança</Text>
                <Text style={[place, country]}>Portugal</Text>
                <IconText
                    icon='user'
                    viewStyle={rowContainer}
                    textStyle={info}
                    text={'35,341'}
                />
                <View style={rowGroup}>
                    <IconText
                        icon='sunrise'
                        viewStyle={rowContainer}
                        textStyle={info}
                        text={'05:52am'}
                    />
                    <IconText
                        icon='sunset'
                        viewStyle={rowContainer}
                        textStyle={info}
                        text={'21:04pm'}
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
        flex: 1,
        opacity: .9,
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height,
        marginTop: StatusBar.currentHeight || 0
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
    country: {
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

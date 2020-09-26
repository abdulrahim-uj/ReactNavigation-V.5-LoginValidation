import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ButtonLinearGradient from 'react-native-linear-gradient';
import Icon_MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';



const SplashScreen = ({navigation}) => {
    return(
        <SafeAreaView style={ Styles.initialContainer }>
            <View style={ Styles.initialContainer }>
                <View style={ Styles.header }>
                    <Animatable.Image 
                        animation="bounceIn"
                        duraton="1500"
                        style={ Styles.logo }
                        source={require('../../assets/images/logo_letter_A.png')}
                        resizeMode="stretch" />
                </View>
                <Animatable.View 
                    animation="fadeInUpBig"
                    style={ Styles.footer }>
                    <Text style={ Styles.title }>Stay Connected with the World!</Text>
                    <Text style={ Styles.text }>Sign-in with the account</Text>
                    <View style={ Styles.button }>
                        <TouchableOpacity 
                            onPress={() => navigation.navigate('Signin')}>
                            <ButtonLinearGradient 
                                colors= {['#E54040', '#EC2540']}
                                style={ Styles.signIn }
                            >
                                <Text style={ Styles.textSign }>Get Started</Text>
                                <Icon_MaterialIcons 
                                    name="navigate-next"
                                    color= "#fff"
                                    size={20}
                                />
                            </ButtonLinearGradient>
                        </TouchableOpacity>
                    </View>
                </Animatable.View>
            </View>
        </SafeAreaView>
    );
}


const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;


const Styles = StyleSheet.create({
    initialContainer: {
        flex: 1,
        backgroundColor: "#523F86"
    },
    header: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
    },
    footer: {
        flex: 1,
        backgroundColor: "#fff",
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30,
    },
    logo: {
        width: height_logo,
        height: height_logo,
    },
    title: {
        color: "#242237",
        fontSize: 30,
        fontWeight: "bold",
    },
    text: {
        color: "gray",
        marginTop: 5,
    },
    button: {
        alignItems: "flex-end",
        marginTop: 30,
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
        flexDirection: "row",
    },
    textSign: {
        color: "#fff",
        fontWeight: "bold",
    }
});



export default SplashScreen;
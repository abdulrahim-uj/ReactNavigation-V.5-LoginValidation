import React from 'react';
import { View, Text, TextInput, StyleSheet, Dimensions, Platform, StatusBar, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ButtonLinearGradient from 'react-native-linear-gradient';
import Icon_FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon_Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';
import { AuthContext } from '../Context';
import ModelUsers from '../models/Users';

const SigninScreen = ({navigation}) => {

    const [data, setData] = React.useState({
        username: '',
        password: '',
        check_TextInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
    })
    /* The fnSignIn from App.js Declared */
    const { fnSignIn } = React.useContext(AuthContext);
    /* This is same like ButtonKeyPress Event */
    const textInputChange = (val) => {
        if(val.trim().length >= 4){
            setData({
                ...data,
                username: val,
                check_TextInputChange: true,
                isValidUser: true,
            });
        } else {
            setData({
                ...data,
                username: val,
                check_TextInputChange: false,
                isValidUser: false,
            });
        }
    }

    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val
        });
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const loginHandle = (username, password) => {

        const foundUser = ModelUsers.filter(item => {
            return username == item.user_name && password == item.user_password;
        })

        if (data.username.length == 0 || data.password.length == 0) {
            Alert.alert("Wrong input", "Username or Password field cannot be empty!", [
                {button: 'Ok'}
            ]);
            return;
        }

        if (foundUser.length == 0) {
            Alert.alert("Invalid user", "Username or Password is incorrect!", [
                {text: 'Ok'}
            ]);
            return;
        }

        fnSignIn(foundUser);
    }
    /* Implementing validation same like OnFocusChange function model */
    const handleValidPassword = (val) => {
        if(val.trim().length >= 8) {
            setData({
                ...data,
                isValidPassword: true,
            });
        } else {
            setData({
                ...data,
                isValidPassword: false,
            });
        }
    }

    return(
        <SafeAreaView style={ Styles.initialContainer }>
            <StatusBar backgroundColor="#523F86" barStyle="light-content" />
            <View style={ Styles.initialContainer }>
                <Animatable.View animation="bounceInRight" style={ Styles.header }>
                    <Text style={ Styles.textHeader }>Sign In</Text>
                </Animatable.View>
                <Animatable.View animation="fadeInUpBig" style={ Styles.footer }>
                    <Text style={ Styles.textFooter }>User Name</Text>
                    <View style={ Styles.action }>
                        <Icon_FontAwesome 
                            name="user-o"
                            color="#CFC7C8"
                            size={20}
                        />
                        <TextInput 
                            placeholder="Enter your username "
                            autoCapitalize="none"
                            style={ Styles.textInput }
                            onChangeText={(val) => textInputChange(val)}
                        />
                        {data.check_TextInputChange ? 
                            <Animatable.View animation="bounceIn">
                                <Icon_Feather 
                                    name="check-circle"
                                    color="green"
                                    size={20}
                                />
                            </Animatable.View>
                        : null}
                    </View>
                    { data.isValidUser ? null : 
                        <Animatable.View animation="fadeInLeft" duraton="500">
                            <Text style={ Styles.errorMsg }>User name must be 4 characters long</Text>
                        </Animatable.View>
                    }
                    
                    <Text style={ [Styles.textFooter, {marginTop: 10}] }>Password</Text>
                    <View style={ Styles.action }>
                        <Icon_Feather 
                            name="lock"
                            color="#CFC7C8"
                            size={20}
                        />
                        <TextInput 
                            placeholder="Enter your password "
                            secureTextEntry={data.secureTextEntry ? true : false}
                            autoCapitalize="none"
                            style={ Styles.textInput }
                            onChangeText={(val) => handlePasswordChange(val)}
                            onEndEditing={(element) => handleValidPassword(element.nativeEvent.text)}
                        />
                        <TouchableOpacity onPress={updateSecureTextEntry}>
                            {data.secureTextEntry ? 
                                <Icon_Feather 
                                    name="eye-off"
                                    color="grey"
                                    size={20}
                                />
                            :
                                <Icon_Feather 
                                    name="eye"
                                    color="grey"
                                    size={20}
                                />
                            }
                        </TouchableOpacity>
                    </View>
                    { data.isValidPassword ? null : 
                        <Animatable.View animation="fadeInLeft" duraton="500">
                            <Text style={ Styles.errorMsg }>Password must be 8 characters long</Text>
                        </Animatable.View>
                    }
                    
                    <View style={ Styles.button }>
                        <TouchableOpacity style={ Styles.signIn } onPress={() => {loginHandle(data.username, data.password)}}>
                            <ButtonLinearGradient
                                colors= {['#E54040', '#EC2540']}
                                style={ Styles.signIn }
                            >
                                <Text style={ Styles.textSign }>Sign In</Text>
                            </ButtonLinearGradient>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            onPress={() => navigation.navigate('Signup')}
                            style={ [Styles.signIn, {borderColor: "#736567", borderWidth: 1, marginTop: 15}] }
                        >
                            <Text style={[Styles.textSign, {color: "#EC2540"}]}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </Animatable.View>
            </View>
        </SafeAreaView>
    );
}



const Styles = StyleSheet.create({
    initialContainer: {
        flex: 1,
        backgroundColor: "#523F86"
    },
    header: {
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 20,
        paddingBottom: 50,
    },
    footer: {
        flex: 3,
        backgroundColor: "#fff",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30,
    },
    textHeader: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 30,
    },
    textFooter: {
        color: "#523F86",
        fontSize: 18,
    },
    action: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#523F86",
        alignItems: "center",
    },
    textInput: {
        flex: 1,
        paddingLeft: 10,
        color: "#000",
    },
    button: {
        alignItems: "center",
        marginTop: 50,
    },
    signIn: {
        width: "100%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    },
    textSign: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff",
    },
    errorMsg: {
        color: "red",
    }
});



export default SigninScreen;
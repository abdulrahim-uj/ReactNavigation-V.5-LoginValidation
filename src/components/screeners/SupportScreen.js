import React from 'react';
import { View, Text } from 'react-native-animatable';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';





const SupportScreen = ({navigation}) => {
    return(
        <SafeAreaView style={ Styles.initialContainer } >
            <View style={ Styles.initialContainer } >
                <Text style={ Styles.titleCenter } > Support Screen </Text>
                <View style={ Styles.buttonContainer }>
                    <TouchableOpacity 
                        onPress={
                            () => alert("Button Clicked!")
                        }
                        style={ Styles.button } >
                        <Text style={ Styles.buttonText } > Alert </Text>
                    </TouchableOpacity>
                </View>
                <View style={ Styles.buttonContainer }>
                    <TouchableOpacity 
                        onPress={
                            () => navigation.navigate("Details")
                        }
                        style={ Styles.button } >
                        <Text style={ Styles.buttonText } > Go To Details Screen </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};


const Styles = StyleSheet.create({
    initialContainer: {
        flex: 1, 
        alignItems: "center", 
        justifyContent: "center",
    },
    titleCenter: {
        fontSize: 36,
        marginBottom: 15
    },
    button: {
        backgroundColor: "#FF2D55",
        paddingHorizontal: 30,
        paddingVertical: 7,
        textAlign: "center",
        borderRadius: 3,
    },
    buttonText: {
        color: "#fff",
    },
    buttonContainer: {
        marginBottom: 10,
    }
});


export default SupportScreen;
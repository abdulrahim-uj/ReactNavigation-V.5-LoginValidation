import React from 'react';
import { View, Text } from 'react-native-animatable';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';




const DetailScreen = ({navigation}) => {
    return(
        <SafeAreaView style={Styles.initialContainer} >
            <View style={ Styles.initialContainer } >
                <Text style={ Styles.titleCenter } > Detail Screen </Text>

                <View style={ Styles.buttonContainer } >
                    <TouchableOpacity 
                        onPress={
                            () => navigation.push("Details")
                        }
                        style={ Styles.button } >
                        <Text style={ Styles.buttonText } > Detail Screen ... Again </Text>
                    </TouchableOpacity>
                </View>

                <View style={ Styles.buttonContainer } >
                    <TouchableOpacity 
                        onPress={
                            () => navigation.navigate("Home")
                        }
                        style={ Styles.button } >
                        <Text style={ Styles.buttonText } > Go To Home </Text>
                    </TouchableOpacity>
                </View>

                <View style={ Styles.buttonContainer } >
                    <TouchableOpacity 
                        onPress={
                            () => navigation.goBack()
                        }
                        style={ Styles.button } >
                        <Text style={ Styles.buttonText } > Go Back </Text>
                    </TouchableOpacity>
                </View>

                {/*If using alone stack navigator it will be work! <View style={ Styles.buttonContainer } >
                    <TouchableOpacity 
                        onPress={
                            () => navigation.popToTop()
                        }
                        style={ Styles.button } >
                        <Text style={ Styles.buttonText } > Go To The First Screen </Text>
                    </TouchableOpacity>
                </View> */}
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


export default DetailScreen;
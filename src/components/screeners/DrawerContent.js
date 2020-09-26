import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Caption, Drawer, Paragraph, Switch, TouchableRipple } from 'react-native-paper';
import Icon_MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon_IonIcons from 'react-native-vector-icons/Ionicons';

import { AuthContext } from '../Context';




export function DrawerContent(props) {

    const [isDarkTheme, setIsDarkTheme] = React.useState(false);

    /* The fnSignOut from App.js Declared */
    const { fnSignOut } = React.useContext(AuthContext);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    }

    return(
        <View style={ Styles.drawerContent }>
            <DrawerContentScrollView {...props} >
                <View style={ Styles.drawerContent }>
                    <View style={ Styles.userInfoSection }>
                        <View style={ Styles.profileContainer }>
                            <Image 
                                source={require('../../assets/images/img_profile.jpeg')}
                                style={ Styles.profile }
                            />
                        </View>
                        <View style={ Styles.profileTextContainer }>
                            <Text style={ Styles.title }>AbdulRahim K</Text>
                            <Text style={ Styles.caption }>@abdulrahimk</Text>
                        </View>
                    </View>
                    <View style={ Styles.row }>
                        <View style= { Styles.section }>
                            <Paragraph style={ [ Styles.paragraph, Styles.caption ] }>90</Paragraph>
                            <Caption style={ Styles.caption }>Following</Caption>
                        </View>
                        <View style={ Styles.section }>
                            <Paragraph style={ [ Styles.paragraph, Styles.caption ] } >180</Paragraph>
                            <Caption style={ Styles.caption }>Followers</Caption>
                        </View>
                    </View>
                    <Drawer.Section style={ Styles.drawerSection }>
                        <Drawer.Item 
                            label= "Home"
                            icon= {({color, size}) => (
                                <Icon_MaterialCommunityIcon 
                                    name="home-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            onPress={() => {props.navigation.navigate('Home')}}
                        />
                        <Drawer.Item 
                            label= "Profile"
                            icon= {({color, size}) => (
                                <Icon_MaterialCommunityIcon 
                                    name="account-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            onPress={() => {props.navigation.navigate('Profile')}}
                        />
                        <Drawer.Item 
                            label= "Bookmarks"
                            icon= {({color, size}) => (
                                <Icon_MaterialCommunityIcon 
                                    name="bookmark-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            onPress={() => {props.navigation.navigate('Bookmark')}}
                        />
                        <Drawer.Item 
                            label= "Settings"
                            icon= {({color, size}) => (
                                <Icon_IonIcons 
                                    name="settings-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            onPress={() => {props.navigation.navigate('Setting')}}
                        />
                        <Drawer.Item 
                            label= "Support"
                            icon= {({color, size}) => (
                                <Icon_MaterialCommunityIcon 
                                    name="account-check-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            onPress={() => {props.navigation.navigate('Supporter')}}
                        />
                    </Drawer.Section>
                    <Drawer.Section title="Preferences">
                        <TouchableRipple onPress={() => {toggleTheme()}}>
                            <View style={ Styles.preference }>
                                <Text>Dark Theme</Text>
                                <View pointerEvents="none">
                                    <Switch value={isDarkTheme} />
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={ Styles.bottomDrawerSection }>
                <Drawer.Item 
                    label= "Logout"
                    icon= {({color, size}) => (
                        <Icon_MaterialCommunityIcon 
                            name="exit-to-app"
                            color={color}
                            size={size}
                        />
                    )}
                    onPress={() => {fnSignOut()}}
                />
            </Drawer.Section>
        </View>
    );
}



const Styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        marginLeft: 10,
        flexDirection: "row",
        alignItems: "center",
    },
    profileContainer: {
        flexDirection: "row",
        marginTop: 15,
    },
    profileTextContainer: {
        marginLeft: 15,
        flexDirection: "column",
    },
    profile: {
        width: 50,
        height: 50,
        borderWidth: 1,
        borderColor: "#707070",
        borderRadius: 25,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: "bold",
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginLeft: 10,
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center",
    },
    section: {
        flexDirection: "row",
        alignItems: "center",
        marginRight: 15,
    },
    paragraph: {
        fontWeight: "bold",
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: "#f4f4f4",
        borderTopWidth: 1,
    },
    preference: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 12,
        paddingHorizontal: 16,
    }
});
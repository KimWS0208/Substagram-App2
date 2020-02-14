import React from "react";
import {View} from "react-native";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Notification from "../screens/Tabs/Notification";
import Profile from "../screens/Tabs/Profile";
import Search from "../screens/Tabs/Search";
import AuthHome from "../screens/Auth/AuthHome";
import MessagesLink from "../components/MessagesLink";

const stackFactory = (initialRoute, customConfig) => createStackNavigator(
    {
        initialRoute: {
            screen:initialRoute, navigationOptions:{...customConfig} 
        }
    }
);

export default createBottomTabNavigator(
    {
        AuthHome:{
            screen: stackFactory(AuthHome, {
                title: "AuthHome",
                headerRight: () => <MessagesLink />
            })
        }, 
        Search:{
            screen: stackFactory(Search, {
                title: "Search"
            })
        },
        Add: {
            screen: () => <View />,
            navigationOptions:{
                tabBarOnPress: ({navigation}) => (
                    navigation.navigate("PhotoNavigation")
                )
            }
        }, 
        Notification:{
            screen: stackFactory(Notification, {
                title: "Notification"
            })
        }, 
        Profile:{
            screen: stackFactory(Profile, {
                title: "Profile"
            })
        }
    }
);


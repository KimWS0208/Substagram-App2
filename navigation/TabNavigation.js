import {View} from "react-native";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Search from "../screens/Auth/Search";
import Notification from "../screens/Auth/Notification";
import Profile from "../screens/Auth/Profile";
import AuthHome from "../screens/Auth/AuthHome";

export default createBottomTabNavigator(
    {
        AuthHome, 
        Search,
        Add: {
            screen: View,
            navigationOptions:{
                tabBarOnPress: () => {
                    console.log("Add")
                }
            }
        }, 
        Notification, 
        Profile
    }
);


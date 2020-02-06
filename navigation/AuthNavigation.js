import { createAppContainer} from "react-navigation";
// import { createStackNavigator } from '@react-navigation/stack';
import { createStackNavigator } from 'react-navigation-stack';
import Search from "../screens/Auth/Search";
import Notification from "../screens/Auth/Notification";
import Profile from "../screens/Auth/Profile";
import AuthHome from "../screens/Auth/AuthHome";

const AuthNavigation = createStackNavigator(
    {
        AuthHome,
        Notification,
        Search,
        Profile,
    },
    {
        headerMode:"none"
    }
);

export default createAppContainer(AuthNavigation);
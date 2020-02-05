import {createStackNavigation, createAppContainer} from "react-navigation";
import SignUp from "../screens/Auth/SignUp";
import Confirm from "../screens/Auth/Confirm";
import LogIn from "../screens/Auth/LogIn";
import AuthHome from "../screens/Auth/AuthHome";

const AuthNavigation = createStackNavigation({
    SignUp,
    Confirm,
    LogIn,
    AuthHome
});

export default createAppContainer(AuthNavigation);
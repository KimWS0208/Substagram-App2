import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import SelectPhoto from "../screens/Photo/SelectPhoto";
import TakePhoto from "../screens/Photo/TakePhoto";
import UploadPhoto from "../screens/Photo/UploadPhoto";
import { createStackNavigator } from "react-navigation-stack";


const PhotoTabs = createMaterialTopTabNavigator(
    {
        SelectPhoto,
        TakePhoto
    },
    {
        tabBarPosition: "bottom"
    }
);

export default createStackNavigator(
    {
        PhotoTabs,
        UploadPhoto
    }
);
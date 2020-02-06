import React from "react";
import styled from "styled-components";
import { TouchableOpacity } from "react-native-gesture-handler";

const View = styled.View`
    justify-content: center;
    align-items: center;
    flex: 1;
`;

const Text = styled.Text``;

export default ({navigation}) => (
    <View>
        <Text>Search</Text>
        <TouchableOpacity onPress={()=>navigation.navigate("AuthHome")}>
            <Text>Go to AuthHome</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate("Notification")}>
            <Text>Go to Notification</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate("Profile")}>
            <Text>Go to Profile</Text>
        </TouchableOpacity>
    </View>
)
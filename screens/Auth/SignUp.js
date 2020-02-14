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
        <Text>SignUp</Text>
        <TouchableOpacity onPress={()=>navigation.navigate("AuthHome")}>
            <Text>Go to AuthHome</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate("Confirm")}>
            <Text>Go to Confirm</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate("Login")}>
            <Text>Go to Login</Text>
        </TouchableOpacity>
    </View>
)
import React, {useContext} from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Entypo } from '@expo/vector-icons'; 
import ConfirmForm from "../components/ConfirmForm";
import { Context as AuthContext } from "../context/AuthContext";
import { NavigationEvents } from "react-navigation";

const ConfirmPasswordScreen = ({navigation}) =>{
    const {state,clearErrorMessage,confirmResetPassword} = useContext(AuthContext);

    return <View style= {styles.containerStyle}>
        <NavigationEvents 
            onWillFocus={clearErrorMessage}     
        />
        <TouchableOpacity onPress= {()=> navigation.navigate("Login")}>
            <Entypo name="home" size={24} color="black" />
        </TouchableOpacity>
       
        <ConfirmForm 
            errorMessage = {state.errorMessage}
            onSubmit = {confirmResetPassword}
            submitButtonPassed = "Confirm Password"
            labels = {
                {
                    header: "Confirm Reset Password",
                    code: "Code sent in email",
                    password: "Password:"
                }
            }
        />
    </View>
}

const styles = StyleSheet.create({
    containerStyle:{
        marginTop: 40
    }
});

export default ConfirmPasswordScreen;
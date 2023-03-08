import React, {useContext} from "react";
import { View, StyleSheet } from "react-native";
import EmailForm from "../components/EmailForm";
import { NavigationEvents } from "react-navigation";
import { Context as AuthContext } from "../context/AuthContext";


const ForgetPasswordScreen = () =>{
    const {state,clearErrorMessage, resetPassword} = useContext(AuthContext);

    return <View>
        <NavigationEvents 
            onWillFocus={clearErrorMessage}     
        />
        <EmailForm 
            errorMessage = {state.errorMessage}
            onSubmit = {resetPassword}
            submitButtonPassed = "Reset Password"
            labels = {
                {
                    header: "Reset Password",
                    email: "Email"
                }
            } 
        />
    </View>
}

ForgetPasswordScreen.navigationOptions = () => {
    return {
      title: "Forgot Password",
    };
};

const styles = StyleSheet.create({});

export default ForgetPasswordScreen;
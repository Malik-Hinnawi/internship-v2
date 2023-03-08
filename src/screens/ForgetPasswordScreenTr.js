import React, {useContext} from "react";
import { View, StyleSheet } from "react-native";
import EmailForm from "../components/EmailForm";
import { NavigationEvents } from "react-navigation";
import { Context as AuthContext } from "../context/AuthContext";


const ForgetPasswordScreenTr = () =>{
    const {state,clearErrorMessage, resetPasswordTr} = useContext(AuthContext);

    return <View>
        <NavigationEvents 
            onWillFocus={clearErrorMessage}     
        />
        <EmailForm 
            errorMessage = {state.errorMessage}
            onSubmit = {resetPasswordTr}
            submitButtonPassed = "Şifre Yenilemek"
            labels = {
                {
                    header: "Şifre Yenile",
                    email: "Eposta"
                }
            } 
        />
    </View>
}

ForgetPasswordScreenTr.navigationOptions = () => {
    return {
      title: "Şifre Unutması Sayfası",
    };
};

const styles = StyleSheet.create({});

export default ForgetPasswordScreenTr;
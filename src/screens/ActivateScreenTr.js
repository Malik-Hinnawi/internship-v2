import React, {useContext} from "react";
import { View, StyleSheet } from "react-native";
import EmailForm from "../components/EmailForm";
import { NavigationEvents } from "react-navigation";
import { Context as AuthContext } from "../context/AuthContext";


const ActivateScreenTr = () =>{
    const {state,clearErrorMessage, activateAccountTr} = useContext(AuthContext);

    return <View>
        <NavigationEvents 
            onWillFocus={clearErrorMessage}     
        />
        <EmailForm 
            errorMessage = {state.errorMessage}
            onSubmit = {activateAccountTr}
            submitButtonPassed = "Hesab etkinlştir"
            labels = {
                {
                    header: "Hesab etkinlştirme Sayfası",
                    email: "Eposta"
                }
            } 
        />
    </View>
}

ActivateScreenTr.navigationOptions = () => {
    return {
      title: "Aktivasyon",
    };
};

const styles = StyleSheet.create({});

export default ActivateScreenTr;
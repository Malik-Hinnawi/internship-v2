import React, {useContext} from "react";
import { View, StyleSheet } from "react-native";
import EmailForm from "../components/EmailForm";
import { NavigationEvents } from "react-navigation";
import { Context as AuthContext } from "../context/AuthContext";


const ActivateScreen = () =>{
    const {state,clearErrorMessage, activateAccount} = useContext(AuthContext);

    return <View>
        <NavigationEvents 
            onWillFocus={clearErrorMessage}     
        />
        <EmailForm 
            errorMessage = {state.errorMessage}
            onSubmit = {activateAccount}
            submitButtonPassed = "Activate Account"
            labels = {
                {
                    header: "Activate account",
                    email: "Email"
                }
            } 
        />
    </View>
}

ActivateScreen.navigationOptions = () => {
    return {
      title: "Activation",
    };
};

const styles = StyleSheet.create({});

export default ActivateScreen;
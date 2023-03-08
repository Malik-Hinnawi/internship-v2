import React, {useContext} from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Entypo } from '@expo/vector-icons'; 
import ConfirmForm from "../components/ConfirmForm";
import { Context as AuthContext } from "../context/AuthContext";
import { NavigationEvents } from "react-navigation";

const ConfirmCodeScreen = ({navigation}) =>{
    const {state,clearErrorMessage,confirmActivation} = useContext(AuthContext);

    return <View style= {styles.containerStyle}>
        <NavigationEvents 
            onWillFocus={clearErrorMessage}     
        />
        <TouchableOpacity onPress= {()=> navigation.navigate("Login")}>
            <Entypo name="home" size={24} color="black" />
        </TouchableOpacity>
       
        <ConfirmForm 
            errorMessage = {state.errorMessage}
            onSubmit = {confirmActivation}
            submitButtonPassed = "Confirm Activation"
            labels = {
                {
                    header: "Confirm Activation",
                    code: "Activation code:",
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

export default ConfirmCodeScreen;
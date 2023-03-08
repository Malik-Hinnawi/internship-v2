import React, {useContext} from "react";
import { View, StyleSheet } from "react-native";
import AuthForm from "../components/AuthFrom";
import { NavigationEvents } from "react-navigation";
import { Context as AuthContext } from "../context/AuthContext";
import NavLink from "../components/NavLink";
import ProblemLink from "../components/ProblemLink";

const LoginScreen = () =>{
    const {state, signin, clearErrorMessage} = useContext(AuthContext);

    
    return <View style = {styles.containerStyle}>
    <NavigationEvents 
        onWillFocus={clearErrorMessage}     
    />
       <NavLink 
        text = "TR"
        routeName="LoginTr"
        />

       <AuthForm 
            labels={
                {
                    header: "Log in",
                    email: "Email",
                    password: "Password"
                }
            }
            errorMessage={state.errorMessage}
            onSubmit={signin}
            submitButtonPassed = "Sign in"
        />
        <ProblemLink 
        text = "Forgot password?"
        routeName="ForgetPassword"
        />

         <NavLink 
        text = "Don't have an account? Activate here"
        routeName="Activate"
        />
    </View>
};

LoginScreen.navigationOptions = () => {
    return {
      title: "",
    };
};

const styles = StyleSheet.create({
    containerStyle:{
        flex:1
    }
});

export default LoginScreen;
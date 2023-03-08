import React, {useContext} from "react";
import { View, StyleSheet } from "react-native";
import AuthForm from "../components/AuthFrom";
import { NavigationEvents } from "react-navigation";
import { Context as AuthContext } from "../context/AuthContext";
import NavLink from "../components/NavLink";
import ProblemLink from "../components/ProblemLink";

const LoginScreenTr = () =>{
    const {state, signinTr, clearErrorMessage} = useContext(AuthContext);

    
    return <View style = {styles.containerStyle}>
    <NavigationEvents 
        onWillFocus={clearErrorMessage}     
    />
    <View>
       <NavLink 
        text = "En"
        routeName="Login"
    /> 
    </View>
       <AuthForm 
            labels={
                {
                    header: "Giriş",
                    email: "Eposta",
                    password: "Şifre"
                }
            }
            errorMessage={state.errorMessage}
            onSubmit={signinTr}
            submitButtonPassed = "Giriş yap"
        />
    <ProblemLink 
        text = "Şifre unuttunuz mu?"
        routeName="ForgetPasswordTr"
        />
     <NavLink 
        text = "Hesabınız yok mu? Burası etkinlişterebilirsiniz"
        routeName="ActivateTr"
        />
    </View>
};

LoginScreenTr.navigationOptions = () => {
    return {
      title: "",
    };
};

const styles = StyleSheet.create({});

export default LoginScreenTr;
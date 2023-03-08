// React:
import React from 'react';

// Navigators:
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { setNavigator } from "./src/navigationRef";
import {Provider as AuthProvider} from "./src/context/AuthContext";

// Screens:
import ActivateScreen from './src/screens/ActivateScreen';
import ActivateScreenTr from './src/screens/ActivateScreenTr';
import ConfirmCodeScreen from './src/screens/ConfirmCodeScreen';
import ConfirmCodeScreenTr from './src/screens/ConfirmCodeScreenTr';
import ForgetPasswordScreen from './src/screens/ForgetPasswordScreen';
import ForgetPasswordScreenTr from './src/screens/ForgetPasswordScreenTr';
import LoginScreen from './src/screens/LoginScreen';
import LoginScreenTr from './src/screens/LoginScreenTr';
import ProfileScreen from './src/screens/ProfileScreen';
import ProfileScreenTr from './src/screens/ProfileScreenTr';
import LogoutScreen from './src/screens/LogoutScreen';
import LogoutScreenTr from './src/screens/LogoutScreenTr';
import ConfirmPasswordScreen from './src/screens/ConfirmPasswordScreen';
import ConfirmPasswordScreenTr from './src/screens/ConfirmPasswordScreenTr';

const mainNavigator = createSwitchNavigator({
    englishFlow: createSwitchNavigator({
        phaseOneFlow: createStackNavigator({
            Login: LoginScreen,
            Activate: ActivateScreen,
            ForgetPassword: ForgetPasswordScreen
        }),
        phaseTwoFlow: createMaterialBottomTabNavigator({
            Profile: ProfileScreen,
            Logout: LogoutScreen
        }),
        ConfirmCode: ConfirmCodeScreen,
        ConfirmPassword: ConfirmPasswordScreen
    }),
    turkishFlow:createSwitchNavigator({
        phaseOneFlowTr: createStackNavigator({
            LoginTr: LoginScreenTr,
            ActivateTr: ActivateScreenTr,
            ForgetPasswordTr: ForgetPasswordScreenTr
        }),
        phaseTwoFlowTr: createMaterialBottomTabNavigator({
            ProfileTr: ProfileScreenTr,
            LogoutTr: LogoutScreenTr
        }),
        ConfirmCodeTr: ConfirmCodeScreenTr,
        ConfirmPasswordTr: ConfirmPasswordScreenTr
    })
})

const App = createAppContainer(mainNavigator);

export default ()=>{
  return (
    <AuthProvider>
      <App ref = {(navigator) =>setNavigator(navigator)}/>
    </AuthProvider>
  )
}
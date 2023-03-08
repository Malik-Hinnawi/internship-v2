import React, {useContext} from "react";
import { View, StyleSheet } from "react-native";
import { Text, Button } from "react-native-elements";
import { MaterialIcons } from '@expo/vector-icons'; 
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";

const LogoutScreen = () =>{
    const {signout} = useContext(AuthContext);

    return <View style = {styles.containerStyle}>
        <Text h3 style= {styles.headerStyle}>Logout</Text>  
        <Spacer>
            <Button 
                title = "Confirm Logout"
                onPress = {()=> signout('Login')}
            />
        </Spacer>
    </View>
}

LogoutScreen.navigationOptions = ()=>{
    return {
        tabBarLabel: "Logout",
        tabBarIcon: ()=> {
            return <MaterialIcons name="logout" size={24} color="black" />;
        }
    }
}

const styles = StyleSheet.create({
    headerStyle:{
        textAlign: "center"
      },
      containerStyle:{
        marginTop: 40
      }
});



export default LogoutScreen;
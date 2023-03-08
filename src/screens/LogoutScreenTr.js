import React, {useContext} from "react";
import { View, StyleSheet } from "react-native";
import { Text, Button } from "react-native-elements";
import { MaterialIcons } from '@expo/vector-icons'; 
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";

const LogoutScreenTr = () =>{
    const {signout} = useContext(AuthContext);

    return <View style = {styles.containerStyle}>
        <Text h3 style= {styles.headerStyle}>Çıkış</Text>  
        <Spacer>
            <Button 
                title = "Çıkış Yap"
                onPress = {()=> signout('LoginTr')}
            />
        </Spacer>
    </View>
};


LogoutScreenTr.navigationOptions = ()=>{
    return {
        tabBarLabel: "Çıkış Yap",
        tabBarIcon: ()=> {
            return <MaterialIcons name="logout" size={24} color="black" />;
        }
    }
};

const styles = StyleSheet.create({
    headerStyle:{
        textAlign: "center"
      },
      containerStyle:{
        marginTop: 40
      }
});

export default LogoutScreenTr;
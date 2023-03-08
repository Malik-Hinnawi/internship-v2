import React, {useContext, useEffect} from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { MaterialIcons } from '@expo/vector-icons'; 
import { SafeAreaView } from "react-navigation";
import { Context as AuthContext } from "../context/AuthContext";

const ProfileScreenTr = () =>{
    const {state} = useContext(AuthContext);

    return <SafeAreaView forceInset={{top: 'always'}}>
        <View style= {styles.containerStyle}>
            <View style = {styles.miniContainerStyle}>
            <Text h4>Ad: </Text>
            <Text>{state.name}</Text>

            <Text h4>Soyad: </Text>
            <Text>{state.surname}</Text>

            <Text h4>Departman: </Text>
            <Text>{state.department}</Text>

            <Text h4>Şirket: </Text>
            <Text>{state.company}</Text>

            <Text h4>Eposta: </Text>
            <Text>{state.email}</Text>

            <Text h4>Rol: </Text>
            <Text>{state.role}</Text>
            </View>
        </View>
    </SafeAreaView>
}

ProfileScreenTr.navigationOptions = ()=>{
    return {
        tabBarLabel: "Profil",
        tabBarIcon: ()=> {
            return <MaterialIcons name="account-circle" size={24} color="black" />;
        }
    }
}

const styles = StyleSheet.create({
    containerStyle:{
        marginTop: 40,
        borderColor: 'black',
        borderWidth: 1,
        marginHorizontal: 5
    },
    miniContainerStyle:{
        paddingLeft: 20,
        marginTop: 40
    }
});

export default ProfileScreenTr;
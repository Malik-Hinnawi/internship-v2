import React from "react";
import {View, StyleSheet, TouchableOpacity} from "react-native"
import ImageUpload from "../components/ImageUpload";
import { Entypo } from '@expo/vector-icons';

const UploadScreen = ({navigation}) => {
    return <View style = {styles.containerStyle}> 
        <TouchableOpacity onPress= {()=> navigation.navigate("Profile")}>
            <Entypo name="home" size={24} color="black" />
        </TouchableOpacity>

        <ImageUpload/>
     </View>;
};

const styles = StyleSheet.create({
    containerStyle: {
        flex:1,
        marginTop: 20
    }
});

export default UploadScreen;
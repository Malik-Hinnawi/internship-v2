import React, {useState, useContext} from "react";
import {View, StyleSheet, TouchableOpacity, Image} from "react-native"
import { Text, Button } from "react-native-elements";
import { Context as AuthContext } from "../context/AuthContext";
import Spacer from "./Spacer";

const ImageUpload = () => {
    const [image, setImage] = useState("");
    const {state,pickImage, updatePic} = useContext(AuthContext);
   
    const uploadPic = () =>{
        const formData = new FormData();
        formData.append('profile',{
            name: new Date() + "_profile",
            uri: image,
            type: "image/jpg"
        });
    };

    return <View style = {styles.containerStyle}>
        <View>
            <TouchableOpacity onPress= {()=>pickImage({setImage})} style= {styles.uploadButton}>
                <Text style = {{textAlign: "center"}}>Upload Image</Text>
                {image? <Image source = {{uri: image}} style = {{width: "100%", height:"100%"}}/>: null}
            </TouchableOpacity>
            <Spacer>
            <Button 
                title = "Upload pic"
                onPress= {()=> updatePic(
                    {
                        id: state.id,
                        imageUri: image,
                        authToken: state.token
                    }
                )}
            />
            </Spacer>
        </View>
    </View>

};

const styles = StyleSheet.create({
    containerStyle:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    uploadButton:{
        height: 125,
        width: 125,
        justifyContent: "center",
        alignItems: "center",
        borderStyle: "dashed",
        borderWidth: 1,
        overflow: 'hidden'
    }
});

export default ImageUpload;
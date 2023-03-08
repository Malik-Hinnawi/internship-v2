import React, {useState} from "react";
import { Text, Input, Button } from "react-native-elements";
import { StyleSheet } from "react-native";
import Spacer from "./Spacer";

const ConfirmForm = ({ errorMessage, onSubmit, submitButtonPassed, labels})=>{
const [code, setCode] = useState("");
const [password, setPassword] = useState("");

return <>
 <Spacer>
      <Text h3 style= {styles.headerStyle}>{labels.header}</Text>  
    </Spacer>
      <Input 
        label = {labels.code}
        value = {code}
        onChangeText = {setCode}
        autoCorrect = {false}
        autoCapitalize = "none"
        keyboardType="numeric"
        />
    <Spacer />
      <Input 
        label = {labels.password}
        value = {password}
        onChangeText = {setPassword}
        autoCorrect = {false}
        autoCapitalize = "none" 
        secureTextEntry
      />

    {errorMessage
      ?<Text style = {styles.errorMessage}>{errorMessage}</Text>
      :null
    }

    <Spacer>
      <Button 
        title = {submitButtonPassed}
        onPress = {()=> onSubmit({code, password})}
      />
    </Spacer>
</>
} ;

const styles = StyleSheet.create({
    errorMessage:{
        fontSize: 16,
        color: 'red',
        padding: 10
    },
    headerStyle:{
      textAlign: "center"
    }
});

export default ConfirmForm;
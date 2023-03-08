import React, {useState} from "react";
import { Text, Input, Button } from "react-native-elements";
import { StyleSheet } from "react-native";
import Spacer from "./Spacer";

const EmailForm = ({ errorMessage, onSubmit, submitButtonPassed, labels})=>{
const [email, setEmail] = useState("");

return <>
 <Spacer>
      <Text h3 style= {styles.headerStyle}>{labels.header}</Text>  
    </Spacer>
      <Input 
        label = {labels.email}
        value = {email}
        onChangeText = {setEmail}
        autoCorrect = {false}
        autoCapitalize = "none"
        />
    <Spacer />

    {errorMessage
      ?<Text style = {styles.errorMessage}>{errorMessage}</Text>
      :null
    }

    <Spacer>
      <Button 
        title = {submitButtonPassed}
        onPress = {()=> onSubmit({email})}
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

export default EmailForm;
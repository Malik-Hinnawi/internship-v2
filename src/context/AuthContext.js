import createDataContext from "./createDataContext";
import { navigate } from "../navigationRef";
import config from "../api/config";
import configTr from "../api/configTr"
import axios from "axios";
import * as ImagePicker from 'expo-image-picker';

const authReducer = (state, action)=>{
    switch(action.type){
        case 'add_error':
            return {...state, errorMessage: action.payload};
        case 'signin':
            return {
                token: action.payload.token,
                errorMessage: '',
                id: action.payload.id,
                name: action.payload.name,
                surname: action.payload.surname,
                department: action.payload.department,
                company: action.payload.company,
                email: action.payload.email,
                role: action.payload.role,
                profilePic: action.payload.profilePic
            };
        case 'clear_error_message':
            return {...state, errorMessage: ''};
        case 'signout':
            return {
                token: null,
                errorMessage: '',
                id: -1,
                name: '',
                surname: '',
                department: '',
                company: '',
                email: '',
                role: '',
                profilePic: ''
            };
        default:
            return state;
    }
};



const clearErrorMessage = dispatch => () =>{
    dispatch({type: 'clear_error_message'})
}


const signout = (dispatch) => (route) =>{
    dispatch({type:'signout'});
    navigate(route);
}

const pickImage = (dispatch) => async ({setImage}) => {
    // No permissions request is necessary for launching the image library
    const response = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if(!response.canceled){
        setImage(response.assets[0].uri);
    }
};

const signin = (dispatch) => async ({email, password})=>{
    try{
        const response = await config.post('/api/auth/signin', {username: email, password});
        dispatch({
            type: 'signin',
            payload:{
                token: response.data.data.accessToken,
                profilePic: response.data.data.user.profilePicture,
                id: response.data.data.user.id,
                name: response.data.data.user.name,
                surname: response.data.data.user.surname,
                department: response.data.data.user.department.name,
                company: response.data.data.user.department.company.name,
                email: response.data.data.user.email,
                role: response.data.data.user.role.name
            }
        });
        navigate('Profile');
    } catch(err){
        const errorText = err.response.data.message;
        dispatch({
         type: 'add_error',
          payload: errorText
        });
        
    }
};

const signinTr = (dispatch) => async ({email, password})=>{
    try{
        const response = await configTr.post('/api/auth/signin', {username: email, password});
        dispatch({
            type: 'signin',
            payload:{
                token: response.data.data.accessToken,
                profilePic: response.data.data.user.profilePicture,
                id: response.data.data.user.id,
                name: response.data.data.user.name,
                surname: response.data.data.user.surname,
                department: response.data.data.user.department.name,
                company: response.data.data.user.department.company.name,
                email: response.data.data.user.email,
                role: response.data.data.user.role.name
            }
        });
        navigate('ProfileTr');
    } catch(err){
        const errorText = err.response.data.message;
        dispatch({
         type: 'add_error',
          payload: errorText
        });
    }
};

const activateAccount = (dispatch) => async ({email})=>{
    try{
        const response = await config.post('/api/auth/send-activation-mail', null, {
            params: {
                email: email
            }
        });
        console.log(response.data);
        navigate("ConfirmCode");
    }
    catch(err){
        const errorText = err.response.data.message;
        dispatch({
          type: 'add_error',
          payload: errorText
        });
    }
};

const activateAccountTr = (dispatch) => async ({email})=>{
    try{
        const response = await configTr.post('/api/auth/send-activation-mail', null, {
            params: {
                email: email
            }
        });
        console.log(response.data);
        navigate("ConfirmCodeTr");
    }
    catch(err){
        console.log("EROOOR");
        dispatch({
          type: 'add_error',
          payload: "Make sure you entered a correct email or contact admin."
        });
    }
};

const resetPassword = (dispatch) => async ({email})=>{
    try{
        const response = await config.post('/api/auth/send-reset-password-mail', null, {
            params: {
                email: email
            }
        });
        console.log(response.data);
        navigate("ConfirmPassword");
    }
    catch(err){
        const errorText = err.response.data.message;
        dispatch({
          type: 'add_error',
          payload: errorText
        });
    }
};

const resetPasswordTr = (dispatch) => async ({email})=>{
    try{
        const response = await configTr.post('/api/auth/send-reset-password-mail', null, {
            params: {
                email: email
            }
        });
        console.log(response.data);
        navigate("ConfirmPasswordTr");
    }
    catch(err){
        const errorText = err.response.data.message;
        dispatch({
          type: 'add_error',
          payload: errorText
        });
    }
};

const confirmActivation = (dispatch) => async ({code, password}) => {
    if(password.length <= 8){
        dispatch({
            type: 'add_error',
            payload: "Password must be at least 8 characters"
          });
    } 
    else if(password.length > 20){
        dispatch({
            type: 'add_error',
            payload: "Password must be at most 20 characters"
          });
    }
    else if(!(/[A-Z]/.test(password))){
        dispatch({
            type: 'add_error',
            payload: "Password must contain at least 1 upper case character"
          });
    }
    else if(!(/[a-z]/.test(password))){
        dispatch({
            type: 'add_error',
            payload: "Password must contain at least 1 lower case character"
          });
    }
    else if(!(/\d/.test(password))){
        dispatch({
            type: 'add_error',
            payload: "Password must contain at least 1 numeric character"
          });
    }
    else if(!(/[@?.!$-+]/.test(password))){
        dispatch({
            type: 'add_error',
            payload: "Password must contain at least 1 special character i.e @?.!$-+"
          });
    }
    else{
        try{
            const response = await config.post('/api/auth/activate-user', null, {
                params: {
                    activationToken: code,
                    password
                }
            });
            navigate("Login");
        }
        catch(err){
        console.log(err.response);
        dispatch({
            type: 'add_error',
            payload: "Code is incorrect."
          });
        }
    }
};


const confirmActivationTr = (dispatch) => async ({code, password}) => {
    if(password.length <= 8){
        dispatch({
            type: 'add_error',
            payload: "Şifre en az 8 karakter olmalı"
          });
    } 
    else if(password.length > 20){
        dispatch({
            type: 'add_error',
            payload: "Şifre en çok 20 karakter olmalı"
          });
    }
    else if(!(/[A-Z]/.test(password))){
        dispatch({
            type: 'add_error',
            payload: "Şifrede en az 1 büyük harfı olduğunu gerekmektedir"
          });
    }
    else if(!(/[a-z]/.test(password))){
        dispatch({
            type: 'add_error',
            payload: "Şifrede en az 1 küçük harfı olduğunu gerekmektedir"
          });
    }
    else if(!(/\d/.test(password))){
        dispatch({
            type: 'add_error',
            payload: "Şifrede en az 1 sayı olduğunu gerekmektedir"
          });
    }
    else if(!(/[@?.!$-+]/.test(password))){
        dispatch({
            type: 'add_error',
            payload: "Şifrede en az 1 özel harfı olduğunu gerekmektedir i.e @?.!$-+"
          });
    }
    else{
        try{
            const response = await configTr.post('/api/auth/activate-user', null, {
                params: {
                    activationToken: code,
                    password
                }
            });
            navigate("LoginTr");
        }
        catch(err){
        console.log(err.response);
        dispatch({
            type: 'add_error',
            payload: "Kodu hatalı."
          });
        }
    }
};


const confirmResetPassword = (dispatch) => async ({code, password}) => {
    if(password.length <= 8){
        dispatch({
            type: 'add_error',
            payload: "Password must be at least 8 characters"
          });
    } 
    else if(password.length > 20){
        dispatch({
            type: 'add_error',
            payload: "Password must be at most 20 characters"
          });
    }
    else if(!(/[A-Z]/.test(password))){
        dispatch({
            type: 'add_error',
            payload: "Password must contain at least 1 upper case character"
          });
    }
    else if(!(/[a-z]/.test(password))){
        dispatch({
            type: 'add_error',
            payload: "Password must contain at least 1 lower case character"
          });
    }
    else if(!(/\d/.test(password))){
        dispatch({
            type: 'add_error',
            payload: "Password must contain at least 1 numeric character"
          });
    }
    else if(!(/[@?.!$-+]/.test(password))){
        dispatch({
            type: 'add_error',
            payload: "Password must contain at least 1 special character i.e @?.!$-+"
          });
    }
    else{
        try{
            const response = await config.post('/api/auth/reset-password', null, {
                params: {
                    resetPasswordToken: code,
                    newPassword: password
                }
            });
            navigate("Login");
        }
        catch(err){
        console.log(err.response);
        dispatch({
            type: 'add_error',
            payload: "Code is incorrect."
          });
        }
    }
};

const confirmResetPasswordTr = (dispatch) => async ({code, password}) => {
    if(password.length <= 8){
        dispatch({
            type: 'add_error',
            payload: "Şifre en az 8 karakter olmalı"
          });
    } 
    else if(password.length > 20){
        dispatch({
            type: 'add_error',
            payload: "Şifre en çok 20 karakter olmalı"
          });
    }
    else if(!(/[A-Z]/.test(password))){
        dispatch({
            type: 'add_error',
            payload: "Şifrede en az 1 büyük harfı olduğunu gerekmektedir"
          });
    }
    else if(!(/[a-z]/.test(password))){
        dispatch({
            type: 'add_error',
            payload: "Şifrede en az 1 küçük harfı olduğunu gerekmektedir"
          });
    }
    else if(!(/\d/.test(password))){
        dispatch({
            type: 'add_error',
            payload: "Şifrede en az 1 sayı olduğunu gerekmektedir"
          });
    }
    else if(!(/[@?.!$-+]/.test(password))){
        dispatch({
            type: 'add_error',
            payload: "Şifrede en az 1 özel harfı olduğunu gerekmektedir i.e @?.!$-+"
          });
    }
    else{
        try{
            const response = await configTr.post('/api/auth/reset-password', null, {
                params: {
                    resetPasswordToken: code,
                    newPassword: password
                }
            });
            navigate("LoginTr");
        }
        catch(err){
        console.log(err.response);
        dispatch({
            type: 'add_error',
            payload: "Kodu hatalı."
          });
        }
    }
};


const updatePic = (dispatch) => async({id, imageUri, authToken})=>{
    try{
        const response = await config.post(`/api/user/${id}/profile-picture/add`, {
            file: imageUri
        },
        {
            params: {
                id
            },
            headers: {
                Authorization: 'Bearer ' + authToken,
                Accept: 'applications/json',
                "Content-Type": "multipart/form-data",
            }
        }
        )
    }
    catch(err){
        console.log(err.response);
    }
};


export const {Provider, Context} = createDataContext(
    authReducer,
    {
        signin,
        signinTr,
        clearErrorMessage,
        signout,
        activateAccount,
        activateAccountTr,
        resetPassword,
        resetPasswordTr,
        confirmActivation,
        confirmActivationTr,
        confirmResetPassword,
        confirmResetPasswordTr,
        updatePic,
        pickImage
    },
    {
        token: null,
        errorMessage: '',
        id: -1,
        name: '',
        surname: '',
        department: '',
        company: '',
        email: '',
        role: '',
        profilePic: ''
    }
);
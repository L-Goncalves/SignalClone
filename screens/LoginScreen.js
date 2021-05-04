import React, { useState } from 'react';
import {StyleSheet, View, KeyboardAvoidingView} from 'react-native';
import { Button, Input, Text, Image} from 'react-native-elements'
const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn = () => {

    }

    return(
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            
            <Image source={{
                uri: "https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png"
            }} style={{width: 200, height: 200}}/>
            <View style={styles.inputContainer}>
                <Input type='Email' 
                placeholder='Email'
                autoFocus 
                value={email} 
                onChangeText={(text) => setEmail(text)}/>
                <Input type='Password'
                placeholder='Password'
                secureTextEntry 
                onChangeText={(text) => setPassword(text)} value={password} />
            </View>
            <Button containerStyle={styles.button} onPress={signIn} title='Login'/>
            <Button containerStyle={styles.button} onPress={() => navigation.navigate("Register")} type="outline" title='Register'/>
           
        </KeyboardAvoidingView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: 'white'
    },
    inputContainer: {
        width: 300,
    },
    button: {
        width: 200,
        marginTop: 10,

    }
})
export default LoginScreen;


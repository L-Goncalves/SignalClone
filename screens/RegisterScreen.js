import React, { useLayoutEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { Alert } from 'react-native';
import { Dimensions, StyleSheet, View, KeyboardAvoidingView } from 'react-native';
import { Button, Input, Text, Image } from 'react-native-elements'
import { auth } from '../firebase';
const RegisterScreen = ({ navigation }) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [imageUrl, setImageUrl] = useState('');


    const register = () => {
        auth.createUserWithEmailAndPassword(email, password)
        .then( (userCredential) =>  {
            var user = userCredential.user;

            user.updateProfile({
                displayName: name,
                photoURL: imageUrl? imageUrl : 'https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png'
            })
            alert('Usuario Cadastrado')
        }
           
        )
        .catch((error) => alert(error.message));
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitle: 'headerBackTitle',
            
        });
        
    }, [navigation])

    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <StatusBar style='light' />
            <Text h3 style={{ marginBottom: 50 }}>
                Create a Signal Account
            </Text>


            <View style={styles.inputContainer}>
                <Input placeholder='Full Name'
                    autoFocus type='text'
                    value={name}
                    onChangeText={(text) => setName(text)}
                />

                <Input placeholder='Email'
                    autoFocus type='text'
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />

                <Input placeholder='Password'
                    autoFocus 
                    type='text'
                    secureTextEntry
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />

                <Input placeholder='Profile Picture url (optional)'
                    autoFocus type='text'
                    value={imageUrl}
                    onChangeText={(text) => setImageUrl(text)}
                    onSubmitEditing={register}
                />
            </View>

            <Button containerStyle={styles.button} raised onPress={register} title='Register'/>
       
        </KeyboardAvoidingView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        padding: 10
    },
    button: {
        width: 200,
        marginTop: 10
    },
    inputContainer: {
        width: 270,
    }
})
export default RegisterScreen;


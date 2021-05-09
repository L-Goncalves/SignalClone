import React, { useLayoutEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { StatusBar, SafeAreaView, Dimensions, StyleSheet, View, KeyboardAvoidingView, ScrollView } from 'react-native';
import { Avatar } from 'react-native-elements';
import CustomListItem from '../components/CustomListItem'
import {auth, db } from '../firebase'


const HomeScreen = ({ navigation }) => {
    console.log(auth.currentUser)
    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Signal',
            headerStyle: {backgroundColor: '#fff'},
            headerTitleStyle: {color: '#000'},
            headerLeft: () => (
                <View style={{marginLeft: 20}}>
                    <TouchableOpacity>
                        <Avatar rounded source={{uri: auth?.currentUser.photoURL}}/>
                    </TouchableOpacity>
                
                </View>
            )
        })
    }, [])
    return(
        <SafeAreaView>
            <ScrollView>
                <CustomListItem/>
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen
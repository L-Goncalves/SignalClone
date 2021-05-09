import React, { useLayoutEffect, useState } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { Button, Input, Text, Image, Avatar, ListItem } from 'react-native-elements'



const CustomListItem = ({id, chatName, enterChat}) => {
    return(
        <>
       <ListItem>
           <Avatar rounded source={{uri: 'https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png'}}/>
           <ListItem.Content>
           <ListItem.Title style={{fontWeight: "bold"}}> Chat </ListItem.Title>
           <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
                Here comes the message
           </ListItem.Subtitle>
       </ListItem.Content>
       </ListItem>
      
       </>
    )
}

export default CustomListItem;
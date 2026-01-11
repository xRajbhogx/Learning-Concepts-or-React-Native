import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'

const index = () => {
  const [username, setUsername]=useState("")
  return (
    <View style={{
      flex:1,
      justifyContent:"center",
      alignItems:"center",
      }}>
      <TextInput
        placeholder="Enter the username"
        value={username} //used to display the value in input field
        onChangeText={(value)=>{setUsername(value)}}
      >
      </TextInput>
      <Text style={{color:"red"}}>
        Current username is: {username}
      </Text>
    </View>
  )
}

export default index
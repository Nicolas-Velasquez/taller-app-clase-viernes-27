import { useRouter} from "expo-router";
import React, { useState } from "react";
import {StyleSheet, Button, Text, TextInput, View,Alert } from "react-native";


const IndexScreen =()=> {
    
    const[textValue,setTextValue] = useState("");
    const[message, setMessage] = useState("");
    const router = useRouter();

    return <View style={estilos.container}>
    

    <TextInput    
    style={estilos.input}
    placeholder="Ingrese Contraseña"
    value={textValue}
    onChangeText={setTextValue}
    secureTextEntry={true}
    />

    <Button    
        title="Ingresar"
        onPress={()=>{
        if (textValue === "hola123") {
        router.push("/Notas");
          setMessage("Contraseña correcta");
        }else {
        setMessage("Contraseña incorrecta");
            Alert.alert(
              'Algo ha salido mal', 
              'Wrong Password', 
              [
                {
                  text: 'Cancel',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                { text: 'OK', onPress: () => console.log('OK Pressed') },
              ]
            );
        }
        }}
    />
    <Text>{message}</Text>
    </View>    
}

export default IndexScreen;

const estilos = StyleSheet.create({
    container:{
        flex:1,
        padding: 16,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: '#f2f2f2'
    },
    input: {
        paddingBlock: 16,
        borderWidth:1,
        borderColor:'#000000',
        borderRadius:14,
        padding:8,
        height:36
    }
})

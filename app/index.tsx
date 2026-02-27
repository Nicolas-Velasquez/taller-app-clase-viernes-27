import React, { useState } from "react";
import { TextInput, View, Text, Button } from "react-native";


const IndexScreen =()=> {
    
    const[textValue,setTextValue] = useState("");
    const[message, setMessage] = useState("");


    return <View>
    

    <TextInput    
    placeholder="Ingrese Contraseña"
    value={textValue}
    onChangeText={setTextValue}
    secureTextEntry={true}
    />

    <Button    
        title="Ingresar"
        onPress={()=>{
        if (textValue === "hola123") {
            
          setMessage("Contraseña correcta");
        }else {
        setMessage("Contraseña incorrecta");
            }
        }}
    />
    <Text>{message}</Text>
    </View>    
}


export default IndexScreen;


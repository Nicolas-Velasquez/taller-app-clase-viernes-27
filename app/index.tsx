import { useRouter} from "expo-router";
import React, { useState } from "react";
import { Button, Text, TextInput, View,Alert } from "react-native";


const IndexScreen =()=> {
    
    const[textValue,setTextValue] = useState("");
    const[message, setMessage] = useState("");
    const router = useRouter();

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


import { useRouter } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, Button, Text, TextInput, View, Alert } from "react-native";

const IndexScreen = () => {
  const [textValue, setTextValue] = useState("");
  const [message, setMessage] = useState("");
  const [secure, setSecure] = useState(true); // 👈 controla mostrar/ocultar
  const router = useRouter();

  const validarPassword = () => {
    if (textValue === "hola123") {
      setMessage("Contraseña correcta");
      router.push("/Notas");
    } else {
      setMessage("Contraseña incorrecta");
      Alert.alert("Algo ha salido mal", "Wrong Password");
    }
  };

  return (
    <View style={estilos.container}>
      <TextInput
        style={estilos.input}
        placeholder="Ingrese Contraseña"
        value={textValue}
        onChangeText={setTextValue}
        secureTextEntry={secure}
      />

      {/* Botón para mostrar/ocultar contraseña */}
      <Button
        title={secure ? "Mostrar contraseña" : "Ocultar contraseña"}
        onPress={() => setSecure(!secure)}
      />

      <Button title="Ingresar" onPress={validarPassword} />

      <Text style={estilos.mensaje}>{message}</Text>
    </View>
  );
};

export default IndexScreen;

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f2f2f2",
  },
  input: {
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 14,
    padding: 12,
    height: 48,
    width: 250,
    marginBottom: 10,
    backgroundColor: "#fff",
  },
  mensaje: {
    marginTop: 10,
    fontSize: 16,
  },
});
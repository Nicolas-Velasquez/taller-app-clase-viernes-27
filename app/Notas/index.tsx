import { useRouter } from "expo-router";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function NotasNumericas() {
  const router = useRouter();

  const [nota, setNota] = useState("");
  const [notas, setNotas] = useState<number[]>([]);
  const [error, setError] = useState("");

  const agregarNota = () => {
    const valor = parseFloat(nota);

    // validar número
    if (isNaN(valor)) {
      setError("Ingresa un número válido");
      return;
    }

    // validar rango
    if (valor < 0 || valor > 5) {
      setError("La nota debe estar entre 0 y 5");
      return;
    }

    setError("");
    setNotas((prev) => [...prev, valor]);
    setNota(""); // limpiar input
  };

  const borrarNotas = () => {
    setNotas([]);
  };

  const promedio =
    notas.length > 0
      ? notas.reduce((acc, n) => acc + n, 0) / notas.length
      : 0;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calculadora de Promedio</Text>

      <TextInput
        style={styles.input}
        placeholder="Agregue su nota de 0.0 a 5.0"
        value={nota}
        onChangeText={(text) => setNota(text.replace(",", "."))}
        keyboardType="decimal-pad"
      />

      <Button title="Agregar nota" onPress={agregarNota} />
      <View style={{ height: 10 }} />

      <Button title="Borrar todas" color="red" onPress={borrarNotas} />
      <View style={{ height: 10 }} />

      <Button title="Regresar" onPress={() => router.back()} />

      {error !== "" && <Text style={styles.error}>{error}</Text>}

      <View style={styles.lista}>
        {notas.map((n, i) => (
          <Text key={i}>• {n.toFixed(1)}</Text>
        ))}
      </View>

      <Text style={styles.promedio}>
        Promedio: {promedio.toFixed(2)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 , marginTop:50 },
  titulo: { fontSize: 22, fontWeight: "bold", marginBottom: 15 },
  input: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 6,
    marginBottom: 10,
  },
  lista: { marginTop: 15 },
  promedio: { marginTop: 20, fontSize: 18, fontWeight: "bold" },
  error: { color: "red", marginTop: 10 },
});
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function DetalhesPetScreen({ route }) {
  const { pet } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: pet.imagem }} style={styles.imagem} />
      <Text style={styles.nome}>{pet.nome}</Text>
      <Text style={styles.texto}>Idade: {pet.idade}</Text>
      <Text style={styles.texto}>Sexo: {pet.sexo}</Text>
      <Text style={styles.texto}>História: {pet.historia}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', padding: 20 },
  imagem: { width: 200, height: 200, borderRadius: 15, marginBottom: 20 },
  nome: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  texto: { fontSize: 16, marginVertical: 5, textAlign: 'center' },
});

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SobreScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Sobre o Abrigo</Text>
      <Text style={styles.texto}>
        O "Lar dos Amigos de 4 Patas" é um abrigo fictício dedicado a cuidar e encontrar lares amorosos para pets abandonados.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  texto: { fontSize: 16, textAlign: 'center' },
});

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function CadastroScreen() {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastro para Adoção</Text>
      <TextInput placeholder="Nome completo" style={styles.input} value={nome} onChangeText={setNome} />
      <TextInput placeholder="Telefone" style={styles.input} value={telefone} onChangeText={setTelefone} keyboardType="phone-pad" />
      <Button title="Enviar Cadastro" onPress={() => alert('Cadastro enviado!')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  titulo: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 5, marginBottom: 15 },
});

import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';

const pets = [
  { id: '1', nome: 'Jurema', idade: '2 anos', sexo: 'Fêmea', historia: 'Resgatada das ruas.', imagem: 'https://i.pinimg.com/222x/c7/bc/ff/c7bcff483688c3705a5865b44092dd00.jpg' },
  { id: '2', nome: 'Thor', idade: '3 anos', sexo: 'Macho', historia: 'Abandonado, mas cheio de amor.', imagem: 'https://s2.glbimg.com/xCHZNRXoPFULYbMhaNDjlf0-fsrJLJbJOqh9oxUvw_hIoz-HdGixxa_8qOZvMp3w/s.glbimg.com/jo/g1/f/original/2013/03/04/heroicanino1.jpg' },
  { id: '3', nome: 'Belinha', idade: '1 ano', sexo: 'Fêmea', historia: 'Muito brincalhona.', imagem: 'https://preview.redd.it/make-this-picture-of-my-dog-look-like-the-dog-accepting-its-v0-eopk8hj75ipe1.jpg?width=640&crop=smart&auto=webp&s=ea804c09fca8f4348327af2b05b36014b44c799e' },
];

export default function ListaPetsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={pets}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('DetalhesPet', { pet: item })}
          >
            <Image source={{ uri: item.imagem }} style={styles.imagem} />
            <Text style={styles.nome}>{item.nome}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 10 },
  card: { alignItems: 'center', marginBottom: 20 },
  imagem: { width: 120, height: 120, borderRadius: 10 },
  nome: { fontSize: 18, fontWeight: 'bold', marginTop: 5 },
});

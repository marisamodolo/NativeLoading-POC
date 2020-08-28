import React from 'react';
import { Link } from 'react-router-native'
import { StyleSheet, Text, View } from 'react-native';
import DotsBounce from '../components/DotsBounce'

const Home = () => (
  <View style={styles.container}>
    <Link
      to="/lista-de-usuarios"
      style={styles.button}
    >
      <Text>Lista de Usuários</Text>
    </Link>
    <Link
      to="/lista-de-usuarios2"
      style={styles.button}
    >
      <Text>Lista de Usuários 2</Text>
    </Link>
    <DotsBounce />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#ffaa99',
    padding: 10,
  }
});

export default Home

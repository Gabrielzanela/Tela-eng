import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
    <Image style={styles.logo} source={require('../images eng.jpg')} />
     <Image style={styles.login} source={require('../IMG-1507.jpg')} />
      <Text style={styles.paragraph}>
     seja bem-vindo.Informe o email cadastrado.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 140,
    width: 140,
    },
    login: {
      margin: 10,
      marginTop: 30,
      height: 80,
      width: 300,
  },
});

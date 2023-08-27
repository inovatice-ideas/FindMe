import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

// This is welcome page
const Home = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>FindMe</Text>
      </View>
      <View style={styles.subHeader}>
        <Text style={styles.subHeaderText}>Find your lost belongings with ease...</Text>
      </View>
      <View style={styles.para}>
        <Text style={styles.paraText}>Post Information on lost and claim lost belongings</Text>
        <Text style={styles.paraText}>Post Infromation on found items</Text>
        <Text style={styles.paraText}>Connect to return or receive items</Text>
      </View>
      <View style={styles.image}>
        <Image source={require('../assets/lost.png')} style={{width: 300, height: 300}} />
      </View>
      <View style={styles.header}>
        <Text style={styles.headerText}>Welcome</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => {props.navigation.navigate("Signup")}}>
          <Text>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: '100%',
    width: '100%'
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 20,
    width: 200,
    height: 40,
    borderRadius: 5
  },
  header: {
    backgroundColor: '#fff',
    height: 100,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold'
  },
  subHeader: {
    backgroundColor: '#fff',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subHeaderText: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold'
  },
  para: {
    backgroundColor: '#fff',
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paraText: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold'
  },
  image: {
    backgroundColor: '#fff',
    height: 300,
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

});

export default Home;

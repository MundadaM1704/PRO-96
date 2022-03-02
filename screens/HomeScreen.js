import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import * as firebase from 'firebase';
import db from '../config.js';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Image
            source={require('../assets/logo.png')}
            style={styles.iconImage}
          />
          <Text style={styles.text}>Diet Plan</Text>
        </View>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('CreateProfile')}>
          <View style={styles.profileContainer}>
            <Text style={styles.profileContainerText}>Profile</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Recipe')}>
          <View style={styles.recipeContainer}>
            <Text style={styles.recipeContainerText}>Recipes</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#98FF98',
  },
  textContainer: {
    backgroundColor: 'green',
    flexDirection: 'row',
    width: 260,
    height: 60,
    borderRadius: 15,
    marginLeft: 50,
    marginTop: 20,
  },
  text: {
    color: 'white',
    padding: 15,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 10,
  },
  iconImage: {
    width: 40,
    height: 40,
    marginRight: 1,
    marginTop: 10,
    margin: 10,
  },
  profileContainer: {
    backgroundColor: '#3EA055',
    flexDirection: 'row',
    width: 250,
    height: 130,
    borderRadius: 15,
    marginLeft: 50,
    marginTop: 50,
    borderWidth: 3,
  },
  recipeContainer: {
    backgroundColor: '#3EA055',
    flexDirection: 'row',
    width: 250,
    height: 130,
    borderRadius: 15,
    marginLeft: 50,
    marginTop: 50,
    borderWidth: 3,
  },
  profileContainerText: {
    fontSize: 25,
    fontWeight: 'bold',
    alignItems: 'center',
    alignSelf: 'center',
    textAlign: 'center',
    marginLeft: 80,
  },
  recipeContainerText: {
    fontSize: 25,
    fontWeight: 'bold',
    alignItems: 'center',
    alignSelf: 'center',
    textAlign: 'center',
    marginLeft: 80,
  },
});

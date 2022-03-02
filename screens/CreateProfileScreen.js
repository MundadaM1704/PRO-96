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
import db from '../config';

export default class CreateProfileScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      health_issues: '',
      age: '',
    };
  }

  async addProfile() {
    await db
      .ref('/info/')
      .set({
        name: this.state.name,
        health_issues: this.state.health_issues,
        age: this.state.age,
      })
      .then(function (snapshot) {});
    this.props.navigation.navigate('Profile');
  }

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

        <View style={{ marginTop: 30 }}>
          <TouchableOpacity style={styles.label}>
            <Text style={styles.labelText}>Name</Text>
          </TouchableOpacity>

          <TextInput
            style={styles.textInput}
            multiline={true}
            placeholderTextColor="black"
            onChangeText={(data) => this.setState({ name: data })}
            value={this.state.name}
          />

          <TouchableOpacity style={styles.label}>
            <Text style={styles.labelText}>Health Issues</Text>
          </TouchableOpacity>

          <TextInput
            style={styles.textInput}
            multiline={true}
            placeholderTextColor="black"
            onChangeText={(data) => this.setState({ health_issues: data })}
            value={this.state.health_issues}
          />

          <TouchableOpacity style={styles.label}>
            <Text style={styles.labelText}>Age</Text>
          </TouchableOpacity>

          <TextInput
            style={styles.textInput}
            placeholderTextColor="black"
            onChangeText={(data) => this.setState({ age: data })}
            value={this.state.age}
          />
        </View>
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save</Text>
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
  textInput: {
    width: 200,
    height: 40,
    borderWidth: 1.9,
    fontSize: 15,
    margin: 10,
    borderRadius: 0,
    paddingLeft: 10,
    backgroundColor: 'white',
    borderColor: '#000000',
    alignItems: 'center',
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: 30,
    marginLeft: 30,
    justifyContent: 'center',
  },
  labelText: {
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 10,
  },
  saveButton: {
    height: 30,
    width: 90,
    borderWidth: 2,
    marginTop: 40,
    paddingTop: 5,
    borderRadius: 40,
    backgroundColor: '#FF6347',
    marginLeft: 130,
    borderColor: 'black',
  },
  saveButtonText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

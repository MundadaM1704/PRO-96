import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import db from '../config';

export default class CreateRecipeScreen extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      steps: '',
      information: '',
    };
  }

  async addRecipe() {
    await db
      .ref('/create/')
      .set({
        title: this.state.title,
        steps: this.state.steps,
        information: this.state.information,
      })
      .then(function (snapshot) {});
    this.props.navigation.navigate('Recipe');
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
          <ScrollView>
            <TextInput
              style={styles.inputFont}
              onChangeText={(title) => this.setState({ title })}
              placeholder={'Title'}
              placeholderTextColor="black"
            />

            <TextInput
              style={[
                styles.inputFont,
                styles.inputFontExtra,
                styles.inputTextBig,
              ]}
              onChangeText={(steps) => this.setState({ steps })}
              placeholder={'Steps'}
              multiline={true}
              numberOfLines={30}
              placeholderTextColor="black"
            />

            <TextInput
              style={[
                styles.inputFont,
                styles.inputFontExtra,
                styles.inputTextBig,
              ]}
              onChangeText={(information) => this.setState({ information })}
              placeholder={'Information'}
              multiline={true}
              numberOfLines={30}
              placeholderTextColor="black"
            />
          </ScrollView>
        </View>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>Add</Text>
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
  inputFont: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    color: 'black',
    fontSize: 17,
  },
  inputFontExtra: {
    marginTop: 15,
  },
  inputTextBig: {
    textAlignVertical: 'top',
    padding: 5,
  },
  addButton: {
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
  addButtonText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

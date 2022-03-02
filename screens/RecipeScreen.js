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
import db from '../config';

export default class RecipeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      create: [],
    };
  }

  componentDidMount() {
    this.fetchCreate();
  }

  fetchCreate = () => {
    let create;
    db.ref('/create/').on(
      'value',
      (snapshot) => {
        create = snapshot.val();
        console.log(create);

        this.setState({
          create: create,
        });
      },
      function (errorObject) {
        console.log('The read failed: ' + errorObject.code);
      }
    );
  };

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
        <Text style={{ marginTop: 200, textAlign: 'center' }}>
          All recipes will be here!!!
        </Text>
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
});

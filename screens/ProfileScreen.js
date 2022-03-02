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

export default class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: [],
    };
  }

  componentDidMount() {
    this.fetchInfo();
  }

  fetchInfo = () => {
    let info;
    db.ref('/info/').on(
      'value',
      (snapshot) => {
        info = snapshot.val();
        console.log(info);

        this.setState({
          info: info,
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
        <View
          style={
            ([styles.text],
            { width: 200, height: 160, marginTop: 20, marginLeft: 30 })
          }>
          <table border="1">
            <tr>
              <td>
                <Text
                  style={{
                    fontSize: 15,
                    color: 'black',
                    fontWeight: 'bold',
                  }}>
                  Name
                </Text>
              </td>

              <td>
                <Text
                  style={{
                    fontSize: 15,
                    color: 'black',
                    fontWeight: 'bold',
                  }}>
                  Health Issues
                </Text>
              </td>

              <td>
                <Text
                  style={{
                    fontSize: 15,
                    color: 'black',
                    fontWeight: 'bold',
                  }}>
                  Age
                </Text>
              </td>
            </tr>

            <td>
              <Text
                style={{
                  fontSize: 15,
                  color: 'black',
                  fontWeight: 'bold',
                }}>
                {this.state.info.name}
              </Text>
            </td>

            <td>
              <Text
                style={{
                  fontSize: 15,
                  color: 'black',
                  fontWeight: 'bold',
                }}>
                {this.state.info.health_issues}
              </Text>
            </td>

            <td>
              <Text
                style={{
                  fontSize: 15,
                  color: 'black',
                  fontWeight: 'bold',
                }}>
                {this.state.info.age}
              </Text>
            </td>
          </table>
        </View>
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

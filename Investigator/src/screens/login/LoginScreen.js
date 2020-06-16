import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  ScrollView,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
} from 'react-native';

import Color from '../../constants/Color';
import CustomButton from '../../components/CustomButton';

const disclaimerText =
  "Disclaimer: This app is not intended for diagnosis or treating patients. The key objective is to show CitiusTech's ability to support various mobile use cases, not to be used as a standalone application for patient engagement.";

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.postLogin = this.postLogin.bind(this);
  }

  postLogin() {
    this.props.navigation.push('Home');
  }

  render() {
    return (
      <View style={styles.screen}>
        <KeyboardAvoidingView behavior="padding">
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image
                source={require('../../assets/images/app_icon.png')}
                style={styles.appLogoContainer}
              />
              <Text style={styles.appTitle}>DigiTrials</Text>
              <Text style={styles.appSubTitle}>Investigator</Text>

              <View style={styles.inputContainer}>
                <TextInput placeholder="Username" style={styles.textInput} />
                <TextInput
                  placeholder="Password"
                  secureTextEntry={true}
                  style={styles.textInput}
                />

                <CustomButton
                  title="Login"
                  pressEvent={this.postLogin}
                  style={{marginTop: 40}}
                />
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>

        <View style={styles.bottomContainer}>
          <Image
            style={styles.logoContainer}
            source={require('../../assets/images/citiuslogo.png')}
          />
          <Text numberOfLines={4} style={styles.disclaimerText}>
            {disclaimerText}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 40,
  },
  appLogoContainer: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    overflow: 'hidden',
    borderRadius: 50,
    marginBottom: 20,
  },
  appTitle: {
    fontSize: 25,
    color: Color.blueColor,
  },
  appSubTitle: {
    fontSize: 18,
    color: Color.blueColor,
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
  },
  textInput: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    fontSize: 18,
  },
  bottomContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    position: 'absolute',
    bottom: 0,
    left: 40,
  },
  logoContainer: {width: 150, height: 30, resizeMode: 'contain'},
  disclaimerText: {
    color: Color.greyLight,
    textAlign: 'center',
    fontSize: 8,
  },
});
export default LoginScreen;

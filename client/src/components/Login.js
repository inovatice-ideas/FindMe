import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, ScrollView} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
// const Signup = (props) => {
//   return (
//     <View
//       style={{
//         flex: 1,
//         backgroundColor: '#307ecc',
//         justifyContent: 'center',
//       }}>
//       <Text style={styles.successTextStyle}>
//         Registration Successful
//       </Text>
//       <TouchableOpacity
//           style={styles.buttonStyle}
//           activeOpacity={0.5}
//           onPress={() => props.navigation.navigate('Login')}>
//           <Text style={styles.buttonTextStyle}>Login Now</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

const Login = (props) => {
  const [Name, setName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userRollNumber, setUserRollNumber] = useState('');
  return (
    <View style={styles.Container}>
      <View
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          justifyContent: 'center',
          alignContent: 'center',
        }}
        style={styles.FormContainer}
      >
          <Text style={styles.successTextStyle}>
            Login
          </Text>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(userRollNumber) => setUserRollNumber(userRollNumber)}
              underlineColorAndroid="#f000"
              placeholder="Enter Roll Number"
              placeholderTextColor="black"
              returnKeyType="next"
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(UserPassword) =>
                setUserPassword(UserPassword)
              }
              underlineColorAndroid="#f000"
              placeholder="Enter Password"
              placeholderTextColor="black"
              returnKeyType="next"
              //secureTextEntry={true}
            />
          </View>
          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={() => props.navigation.navigate('Dashboard')}
          >
            <Text style={styles.buttonTextStyle}>Login</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    //display: 'flex',
    flex: 1,
    backgroundColor: 'white',
    //justifyContent: 'center',
  },
  FormContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: '#7DE24E',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    width: 200,
    alignItems: 'center',
    borderRadius: 30,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: 'black',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#dadae8',
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  successTextStyle: {
    color: 'black',
    textAlign: 'center',
    fontSize: 18,
    padding: 30,
  },
});


export default Login;


import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Modal, TextInput, Button,TouchableWithoutFeedback, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const IntroScreen = () => {
  const navigation = useNavigation();
  const [showLogin, setShowLogin] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handlePress = () => {
    navigation.navigate("Configure" as never);
  };
  const toggleLoginOverlay = () => {
    setShowLogin(!showLogin);
  };
  const closeLoginOverlay = () => {
    setShowLogin(false);
  };
  const handleLogin = () => {
    if (username === '1234' && password === '1234') {
      setShowLogin(false);
      setUsername('');
      setPassword('');
      Alert.alert(
        'Login Successful',
        'Creators :\n\n-Agaash A (RA2131241020001)\n-Yogesh Y (RA2131241020010)\n-Deepak Kumar R (RA2131241020013)'
      );
    } else {
      Alert.alert('Login Failed', 'Invalid username or password. Please try again.');
      setUsername('');
      setPassword('');
    }
  };

  return (
    <TouchableWithoutFeedback onPress={closeLoginOverlay}>
      <ImageBackground
        source={require('../assets/Pc0.jpg')} 
        style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
      >
        <TouchableOpacity onPress={toggleLoginOverlay} style={{ position: 'absolute', top: 20, right: 20, zIndex: 1 }}>
          <Text style={{ fontSize: 20, color: 'white' }}>🔒</Text>
        </TouchableOpacity>

        <View style={{ alignItems: 'center' }}>
          <Text style={{
              fontSize: 37,
              color: 'white',
              fontFamily: 'Alkatra-Bold',
              textShadowColor: 'black',
              textShadowOffset: { width: 2, height: 2 },
              textShadowRadius: 5,
            }}> Build Your Dream PC</Text>

          <TouchableOpacity onPress={handlePress}>
            <View style={{ backgroundColor: 'black', padding: 10, borderRadius: 20, marginTop: 20 }}>
              <Text style={{ fontSize: 25, color: 'white', fontFamily: 'Audiowide-Regular' }}>Start Customizing</Text>
            </View>
          </TouchableOpacity>
        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={showLogin}
          onRequestClose={closeLoginOverlay}
        >
          <TouchableWithoutFeedback onPress={closeLoginOverlay}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, width: 300 }}>
                <Text style={{ fontSize: 20, marginBottom: 10 }}>Administrator Login</Text>
                <TextInput
                  placeholder="Username"
                  style={{ marginBottom: 10, padding: 10, borderColor: 'gray', borderWidth: 1 }}
                  value={username}
                  onChangeText={(text) => setUsername(text)}
                />
                <TextInput
                  placeholder="Password"
                  secureTextEntry={true}
                  style={{ marginBottom: 20, padding: 10, borderColor: 'gray', borderWidth: 1 }}
                  value={password}
                  onChangeText={(text) => setPassword(text)}
                />
                <Button title="Login" onPress={handleLogin} />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

export default IntroScreen;

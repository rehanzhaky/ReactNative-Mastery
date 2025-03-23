import React, {Component} from 'react';
import {Image, Text, TextInput, View} from 'react-native';

// Functional Component
const App = () => {
  return (
    <View>
      <Text>Text 1</Text>
      {/* Pemanggilan Functional Component Implementasi Text */}
      <ImplementasiText />
      {/* Pemanggilan Functional Component Implementasi Style */}
      <ImplementasiStyle />
      {/* Pemanggilan Functional Component Implementasi Image */}
      <ImplementasiImage />
      {/* Pemanggilan Functional Component Implementasi Text Input */}
      <ImplementasiTextInput />
      {/* Pemanggilan Class Component, Implementasi Class Component */}
      <PhotoProfile />
    </View>
  );
};

// Buat functional component baru, implementasi Text
// Bisa dengan shortcut 'rfce'
const ImplementasiText = () => {
  return <Text>Ini adalah Implementasi Text</Text>;
};

// Buat functional component baru, implementasi style
const ImplementasiStyle = () => {
  return (
    <View
      style={{height: 80, width: 80, backgroundColor: 'blue', borderRadius: 20}}
    />
  );
};

// Buat functional component baru, implementasi image
const ImplementasiImage = () => {
  return (
    <Image
      source={{
        uri: 'https://images.unsplash.com/photo-1726064855955-5fe51cd6993c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      }}
      style={{width: 100, height: 100, borderRadius: 20}}
    />
  );
};

// Buat functional component baru, Text Input
const ImplementasiTextInput = () => {
  return <TextInput style={{borderWidth: 1}} />;
};

// Buat class component baru, class photo profile berisi image dan text
// Bisa dengan shortcut 'cc'
class PhotoProfile extends Component {
  render() {
    return (
      <View>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1726064855955-5fe51cd6993c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
          style={{width: 100, height: 100, borderRadius: 100}}
        />

        <Text style={{color: 'red', fontSize: 24, fontWeight: '600'}}>
          Ini adalah Photo Profile
        </Text>
      </View>
    );
  }
}

export default App;

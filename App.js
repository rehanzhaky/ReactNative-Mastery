import React, {Component} from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import ayamtaliwang from '../BelajarNative/ayamtaliwang.png';

// Functional Component
const App = () => {
  return (
    <View>
      {/* Pemanggilan Functional Component Ayam Taliwang */}
      <AyamTaliwang />
      {/* Implementasi StyleSheet */}
      <ImplementasiStyleSheet />
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

// Awal dari Contoh Project nyata sekaligus implementasi style sheet
const AyamTaliwang = () => {
  return (
    <View
      style={{
        backgroundColor: 'red',
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
      }}>
      <Text style={StyleTextAyam.text}>Ayam Taliwang</Text>
      <Text style={StyleTextRp.text}>Rp. 35k / Porsi</Text>
      <Text style={StyleTextPhotos.text}>Photos</Text>
      <Image style={StyleImage.image} source={ayamtaliwang} />
      <View
        style={{
          backgroundColor: '#EFA00B',
          marginTop: 36.46,
          marginLeft: 34,
          marginRight: 24.15,
          borderRadius: 17,
          marginBottom: 37.38,
        }}>
        <Text
          style={{
            fontWeight: 'medium',
            fontSize: 18,
            color: 'white',
            textAlign: 'center',
            paddingVertical: 10,
            paddingHorizontal: 85,
          }}>
          Explore Now
        </Text>
      </View>
    </View>
  );
};

// Penerapan Style Sheet untuk teks Ayam Taliwang
const StyleTextAyam = StyleSheet.create({
  text: {
    fontSize: 22,
    fontWeight: 'medium',
    color: '#000000',
    paddingTop: 51,
    paddingLeft: 22,
  },
});

const StyleTextRp = StyleSheet.create({
  text: {
    paddingLeft: 22,
  },
});

const StyleTextPhotos = StyleSheet.create({
  text: {
    paddingLeft: 22,
    paddingTop: 35.54,
    paddingBottom: 11,
  },
});

// Akhir dari Contoh Project nyata sekaligus implementasi style sheet
const StyleImage = StyleSheet.create({
  image: {
    marginLeft: 22,
    borderRadius: 20,
  },
});

// Functional Componenent untuk menerapkan design dari Style Sheet
const ImplementasiStyleSheet = () => {
  return (
    <View>
      <Text style={StylesImplementasiStyleSheet.text}>
        Ini adalah contoh implementasi text
      </Text>
    </View>
  );
};

// bentuk implementasi style menggunakan style sheet
const StylesImplementasiStyleSheet = StyleSheet.create({
  text: {
    fontSize: 16,
    fontStyle: 'italic',
    fontWeight: 'bold',
    marginBottom: '20',
  },
});

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

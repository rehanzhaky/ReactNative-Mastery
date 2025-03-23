import React from 'react';
import {Text, View} from 'react-native';

// Functional Component
const App = () => {
  return (
    <View>
      <Text>Text 1</Text>
      <Manggil />
      <Text>Text 2</Text>
      <Text>Text 3</Text>
    </View>
  );
};

const Manggil = () => {
  return <Text>Hai panggil aku dong</Text>;
};

export default App;

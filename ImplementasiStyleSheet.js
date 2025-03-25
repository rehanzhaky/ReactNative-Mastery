import React from "react";
import { View, Text, StyleSheet} from "react-native";

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

export default ImplementasiStyleSheet;

import React from 'react';
import { View, StyleSheet } from 'react-native';
import TopNavBar from "../components/TopNavbar"

export default function App() {
  return (
    <View style={styles.container}>
      <TopNavBar />
      {/* Rest of your screen content here */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

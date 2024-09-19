import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Productos } from './Productos';
import { ScrollUsers } from './components/ScrollUsers';
import { FlatListUsers } from './components/FlatListUsers';

export default function App() {

  
  return (
  //  <Productos/>
    // <ScrollUsers/>
    <FlatListUsers />
  );
}

const styles = StyleSheet.create({
  
});

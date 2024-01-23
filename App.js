import React, { useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const RN_BASIC_COMPONENTS = [
  {
    id: '1',
    name: 'Text',
    description: 'A component for displaying text',
  },
  {
    id: '2',
    name: 'TextInput',
    description: 'A component for inputting text into the app using keyboard',
  },
  {
    id: '3',
    name: 'View',
    description:
      'The most fundamental component of React Native for building user interfaces',
  },
  {
    id: '4',
    name: 'ScrollView',
    description:
      'Provides a scrolling view that can contain a variety of content and components',
  },
  {
    id: '5',
    name: 'Image',
    description: 'A component for displaying images',
  },
  {
    id: '6',
    name: 'StyleSheet',
    description: 'Provides an abstraction layer similar to CSS stylesheets',
  },
];

export default function App() {
  const [name, setName] = useState('');

  return (
    <ScrollView style={styles.container}>
      <View style={{ alignItems: 'center' }}>
        <Image source={require('./assets/colors.jpg')} style={styles.logo} />
        <Text>Hello, {name ? name : 'World'}!</Text>
        <Text style={styles.title}>
          Welcome to your first React Native and Expo App!
        </Text>
        <TextInput
          value={name}
          onChangeText={setName}
          style={styles.input}
          maxLength={30}
          placeholder="Enter your name"
        />
      </View>
      <View style={styles.bottomWrapper}>
        <Text style={styles.subtitle}>React Basic Components:</Text>
        {RN_BASIC_COMPONENTS.map((component, index) => (
          <View key={component.id} style={styles.compWrapper}>
            <Text style={styles.compTitle}>
              {index + 1} - {component.name}
            </Text>
            <Text style={styles.compDesc}>{component.description}</Text>
            <View style={styles.divider} />
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#09D588',
    paddingTop: 100,
  },
  logo: {
    width: 75,
    height: 75,
    borderRadius: 50,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    color: '#063768',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 20,
    color: '#063768',
  },
  subtitle: {
    fontSize: 20,
    color: '#063768',
    fontWeight: 'bold',
  },
  bottomWrapper: {
    padding: 20,
    backgroundColor: '#09D',
    marginBottom: 100,
  },
  compWrapper: {
    padding: 10,
  },
  compTitle: {
    fontSize: 16,
    color: '#063768',
    paddingVertical: 5,
  },
  compDesc: {
    fontSize: 14,
    color: '#063768',
    paddingLeft: 25,
  },
  divider: {
    width: '100%',
    height: 1,
    marginTop: 20,
    backgroundColor: '#063768',
  },
});

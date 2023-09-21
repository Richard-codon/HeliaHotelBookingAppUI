import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, SafeAreaView, Button, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const UserProfileScreen = () => {
  const navigation = useNavigation();

  // State to hold user information
  const [user, setUser] = useState({
    name: '',
    email: '',
    profilePicture: null, 
  });

  // Function to handle profile picture upload
  const handleProfilePictureUpload = () => {
    //will implement the function later
  };

  // Function to handle profile updates
  const handleProfileUpdate = () => {
   //will implement the function later
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Profile Picture */}
      <TouchableOpacity onPress={handleProfilePictureUpload}>
        <Image source={user.profilePicture ? { uri: user.profilePicture } : require('../../assets/profile.jpg')} style={styles.profilePicture} />
      </TouchableOpacity>

      {/* User Information */}
      <Text style={styles.label}>Name:</Text>
      <TextInput
        style={styles.input}
        value={user.name}
        onChangeText={(name) => setUser({ ...user, name })}
      />

      <Text style={styles.label}>Business name:</Text>
      <TextInput
        style={styles.input}
        value={user.email}
        onChangeText={(Businessname) => setUser({ ...user, Businessname })}
      />

      {/* Save Button */}
      <Button title="Save Changes" onPress={handleProfileUpdate} />

      {/* Logout Button */}
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.logout}>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
  },
  profilePicture: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  logout: {
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default UserProfileScreen;

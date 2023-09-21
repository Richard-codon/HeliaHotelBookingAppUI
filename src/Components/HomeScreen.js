//import dependencies and libraries
import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, SafeAreaView, Image, FlatList, ImageBackground, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// array of hotel data(3 dummy hotel data)
const data = [
  {
    id: '1',
    image: require('../../assets/hotelroom1.jpg'),
    name: 'Emeralda De Hotel',
    location: 'Paris, France',
    price: '$29/ per night ',
    rating: 4.8,
  },
  {
    id: '2',
    image: require('../../assets/hotelroom.jpg'),
    name: 'Hotel 2',
    location: 'New York, USA',
    price: '$250/ per night',
    rating: 4.5,
  },
  {
    id: '3',
    image: require('../../assets/hotelroom3.jpg'),
    name: 'Hotel 3',
    location: 'London, UK',
    price: '$180/ per night',
    rating: 4.2,
  },
];

//array for buttons 
const buttonData = [
  { id: '1', title: 'Recommended' },
  { id: '2', title: 'Popular' },
  { id: '3', title: 'Trending' },
];

// main function for the home page
const HomeScreen = () => {
  // use state effect for the pressing of the icons and buttons and initially setting them to null 
  const [pressedButtonId, setPressedButtonId] = useState(null);
  const [pressedNavButtonId, setPressedNavButtonId] = useState(null);

  const renderHotelRoom = ({ item }) => (
    <View style={styles.hotelCard}>
      <ImageBackground
        source={item.image}
        style={styles.hotelImage}
        imageStyle={styles.imageStyle}
      >
        {/* button for the hotel rating*/}
        <TouchableOpacity style={styles.starButton}>
          <Icon name="star-outline" size={30} color="white" />
          <Text style={styles.ratingText}>{item.rating}</Text>
        </TouchableOpacity>

        {/* Hotel name */}
        <Text style={styles.hotelName}>{item.name}</Text>

        {/* Location*/}
        <Text style={styles.locationText}>{item.location}</Text>

        {/* Price*/}
        <Text style={styles.priceText}>{item.price}</Text>
      </ImageBackground>

      {/* Save bookmark icon */}
      <TouchableOpacity style={styles.saveButton}>
        <Icon name="bookmark" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );

  const renderButtons = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.button,
        pressedButtonId === item.id ? styles.buttonPressed : null,
      ]}
      onPress={() => setPressedButtonId(item.id)}
    >
      <Text style={[
        styles.buttonText,
        pressedButtonId === item.id ? styles.textPressed : null,
      ]}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Top Header */}
      <View style={styles.topHeader}>
        {/* Company Logo */}
        <Image source={require('../../assets/hh.jpg')} style={styles.customLogo} />
        {/* Company Name */}
        <Text style={styles.companyName}>Helia</Text>
        {/* Notification and Details Icons */}
        <View style={styles.notificationIcons}>
          <TouchableOpacity style={styles.notificationIcon}>
            <Icon name="notifications-outline" size={30} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.detailsIcon}>
            <View style={styles.bookmarkIcon}>
              <Icon name="bookmark" size={30} color="black" />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {/* Greeting Message */}
      <View style={styles.greeting}>
        <Text style={styles.greetingText}>Hello, Daniel 👋</Text>
      </View>

      {/* Search Bar */}
      <ScrollView>
        <View style={styles.searchBar}>
          <Icon name="search-outline" size={30} color="#4CAF50" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search "
            placeholderTextColor="#999"
          />
        </View>

        {/* Buttons */}
        <FlatList
          data={buttonData}
          horizontal
          renderItem={renderButtons}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.buttonList}
        />

        {/* Hotel Room List */}
        <FlatList
          data={data}
          horizontal
          renderItem={renderHotelRoom}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.hotelList}
        />

        <View style={styles.bottomRow}>
          <Text style={styles.recentlyBookedText}>Recently Booked</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>See All</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom Navigation(icons), using tenary operators for the logic of pressing a button/icon */}
      <View style={styles.bottomNav}>
        <TouchableOpacity
          style={[
            styles.iconContainer,
            pressedNavButtonId === 'Home' ? styles.iconPressed : null,
          ]}
          onPress={() => setPressedNavButtonId('Home')}
        >
          <Icon name="home-outline" size={30} color={pressedNavButtonId === 'Home' ? '#4CAF50' : 'lightgray'} />
          <Text style={[styles.label, pressedNavButtonId === 'Home' ? styles.textPressed : { color: 'lightgray' }]}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.iconContainer,
            pressedNavButtonId === 'Search' ? styles.iconPressed : null,
          ]}
          onPress={() => setPressedNavButtonId('Search')}
        >
          <Icon name="search-outline" size={30} color={pressedNavButtonId === 'Search' ? '#4CAF50' : 'lightgray'} />
          <Text style={[styles.label, pressedNavButtonId === 'Search' ? styles.textPressed : { color: 'lightgray' }]}>Search</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.iconContainer,
            pressedNavButtonId === 'Booking' ? styles.iconPressed : null,
          ]}
          onPress={() => setPressedNavButtonId('Booking')}
        >
          <Icon name="book-outline" size={30} color={pressedNavButtonId === 'Booking' ? '#4CAF50' : 'lightgray'} />
          <Text style={[styles.label, pressedNavButtonId === 'Booking' ? styles.textPressed : { color: 'lightgray' }]}>Booking</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.iconContainer,
            pressedNavButtonId === 'Profile' ? styles.iconPressed : null,
          ]}
          onPress={() => setPressedNavButtonId('Profile')}
        >
          <Icon name="person-outline" size={30} color={pressedNavButtonId === 'Profile' ? '#4CAF50' : 'lightgray'} />
          <Text style={[styles.label, pressedNavButtonId === 'Profile' ? styles.textPressed : { color: 'lightgray' }]}>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

//styles 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  topHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  companyName: {
    fontSize: 23,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 4,
  },
  notificationIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto',
  },
  notificationIcon: {
    marginRight: 10,
  },
  detailsIcon: {
    marginRight: 10,
  },
  greeting: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 13,
    marginRight: 200,
  },
  greetingText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginRight: 1,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 15,
    paddingTop: 10,
    width: '83%',
    backgroundColor: 'ghostwhite',
    borderRadius: 20,
    marginBottom: 20,
    marginHorizontal:10,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    fontSize: 18,
    marginBottom: 15,
    marginTop: 10,
  },
  hotelList: {
    marginTop: 10,
    marginBottom: 20,
  },
  hotelImage: {
    width: 250,
    height: 350,
    resizeMode: 'cover',
    borderRadius: 20,
    marginRight: 10,
    marginLeft: 20,
    marginBottom: 20,
    justifyContent: 'flex-end',
  },
  imageStyle: {
    borderRadius: 15,
  },
  hotelName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    margin: 10,
    marginTop:8,
  },
  locationText: {
    fontSize: 16,
    color: '#ccc',
    marginTop: 15,
    marginLeft: 10,
  },
  priceText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 20,
    marginLeft: 10,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  label: {
    fontSize: 16,
    color: '#4CAF50',
    marginTop: 5,
  },
  starButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#4CAF50',
    borderRadius: 28,
    padding: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 5,
  },
  buttonList: {
    flexDirection: 'row',
    marginTop: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'white',
    borderColor: 'green',
    borderWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 50,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonPressed: {
    backgroundColor: 'green',
    borderColor: 'white',
  },
  buttonText: {
    color: 'green',
    fontSize: 18,
    fontWeight: 'bold',
  },
  textPressed: {
    color: 'white',
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 10,
    marginBottom: 50,
    alignItems: 'center',
    width: '85%',
  },
  recentlyBookedText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  seeAllText: {
    fontSize: 18,
    color: '#4CAF50',
    fontWeight:'bold',
  },
  saveButton: {
    position: 'absolute',
    top: 300,
    right: 15,
    backgroundColor: 'transparent',
    borderRadius: 20,
    padding: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconPressed: {
    backgroundColor: 'green', 
  },
  customLogo: {
    width: 40, 
    height: 50,
    marginLeft: -10, 
    
    

  },
});


export default HomeScreen;

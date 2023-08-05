//import the necessary dependencies 
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

//function to handle navigation between the covid update page and any other page this page preceeds
const CovidUpdate = () => {
  const handleNavigationBack = () => {
    // Perform navigation back to the homepage(or anyother screen)
  };


 // the returning values of the main function(CovidUpdate)
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.titleBar}>
        <TouchableOpacity onPress={handleNavigationBack}>
          <Icon name="arrow-back" size={24} color="black" style={styles.backButton} />
        </TouchableOpacity>
        <Text style={styles.title}>COVID-19 UPDATE</Text>
        <TouchableOpacity>
          <Text style={styles.cancelButton}>Cancel</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.navigationBar}>
        {/* Go Back Button */}
      </View>
      <View style={styles.customsBar}>
        <View style={styles.customsBarIcon}>
          <Icon name="info" size={20} color="black" style={styles.customsBarIcon} />
        </View>
        <Text style={styles.customsText}>Ethiopian Customs Regulation</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <Image source={require('../assets/logo.jpg')} style={styles.logo} />
          <TouchableOpacity >
          <Icon name="search" size={28} color="black" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity >
          <Icon name="notifications" size={28} color="black" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity >
          <Icon name="public" size={28} color="black" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity >
          <Icon name="people" size={28} color="black" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity>
          <Icon name="menu" size={28} color="black" style={styles.icon}/>
          </TouchableOpacity>
        </View>
        <Image source={require('../assets/airline.jpg')} style={styles.photo} />
        <Text style={styles.boldTitle}>The safety, security, and good health of our passengers and employees are our highest priority.</Text>
        <Text style={styles.infoText}>
          Prioritizing the safety and wellbeing of our passengers and employees as we usually do, we have unveiled a newly designed airport terminal with biosafety and biosecurity in mind.
          Guests are well taken care of onboard and at the terminal with the latest aviation infrastructure.
        </Text>
        <TouchableOpacity >
        <View style={styles.card}>
          <Text style={styles.cardHeader}>Travel Alert</Text>
          <Text style={styles.cardText}>
            Immigration and entry restrictions operational flight{'\n'}
            {'\n'}
            <Text style={styles.cardSubheader}>Ticket options for bookings after COVID-19</Text>{'\n'}
            {'\u2022'} Date change: Tickets issued on/after 01 Jun 2022, date change and cancellation fees are per fare rules.{'\n'}
            {'\n'}
            {'\u2022'} Refund: Tickets that are issued in 2019/2020 with out-of-bound travel on/after January 2020 until December 31, 2021, refund permitted free of charge until July 15, 2022. Starting from July 16, 2022, these tickets will not be refundable.{'\n'}
            {'\n'}
            {'\u2022'} Refund: For all other tickets not listed in the above points, refunds shall be governed as per fare rules.{'\n'}
            {'\n'}
            NB: Any local customer protection laws, DOT, EU, ICPA, DGCA, South Africa, Israel & Brazil Regulations supersede & have precedence over this policy.
          </Text>
        </View>
        </TouchableOpacity>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

//create styles for each prop
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  underline: {
    textDecorationLine: 'underline',
  },
  titleBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  backButton: {
    marginRight: 10,
    fontSize: 35,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  
  },
  cancelButton: {
    fontSize: 18,
    color: 'black',
  },
  navigationBar: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  customsBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  customsBarIcon: {
    marginRight: 8,
  },
  customsText: {
    color: 'black',
    fontSize: 18,
    textAlign: 'center',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 15,
    marginTop: 10,
  },
  logo: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginRight: 10,
  },
  icon: {
    marginLeft: 10,
  },
  photo: {
    width: 500,
    height: 70,
    resizeMode: 'cover',
    marginTop: 20,
  },
  boldTitle: {
    fontSize: 38,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  infoText: {
    fontSize: 22,
    textAlign: 'center',
    marginTop: 10,
  },
  card: {
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 20,
    marginTop: 20,
    width: '80%',
    borderWidth: 2,
    borderColor: 'green',
  },
  cardExpanded: {
    paddingBottom: 20,
  },
  cardHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign:'center',
  },
  cardText: {
    fontSize: 14,
  },
});

export default CovidUpdate;

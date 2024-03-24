import React, { useState } from 'react';
import { View, Button, Text, TextInput, ImageBackground, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DetailScreen = () => {
  const navigation = useNavigation();

  const components = [
    { name: 'Processor', price: 200 },
    { name: 'Motherboard', price: 150 },
    { name: 'RAM', price: 100 },
    { name: 'Storage', price: 120 },
    { name: 'Cabinet', price: 80 },
    { name: 'GPU', price: 300 },
    { name: 'Monitor', price: 250 },
    { name: 'SMP', price: 50 },
    { name: 'Other parts', price: 70 },
    { name: 'OS (optional)', price: 50 }
  ];

  const [searchValues, setSearchValues] = useState<{ [key: string]: string }>({});
  const [totalPrice, setTotalPrice] = useState<number>(calculateTotalPrice());
  const [performance, setPerformance] = useState<number>(calculatePerformance());

  const handleSearchChange = (name: string, value: string) => {
    setSearchValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  function calculateTotalPrice() {
    let total = 0;
    for (const component of components) {
      if (searchValues[component.name]) {
        total += component.price;
      }
    }
    return total;
  }

  function calculatePerformance() {
    // Just a dummy calculation, you can replace it with your own logic
    return Math.floor(Math.random() * 100);
  }

  const navigateToAutomaticBuilder = () => {
    navigation.navigate('Go back' as never);
  };

  return (
    <ImageBackground
      source={require('../assets/Pc1.jpg')}
      style={styles.backgroundImage}
    >
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.container}>
          <View style={styles.buttonContainer}>
            <Button title="Pre-Build" onPress={navigateToAutomaticBuilder} color="#4527a0" />
          </View>
          {components.map((item, index) => (
            <View style={styles.componentContainer}>
              <Text style={styles.componentName}>{item.name}</Text>
              <TextInput
                placeholder={`Search ${item.name}`}
                value={searchValues[item.name] || ''}
                onChangeText={(value) => handleSearchChange(item.name, value)}
                style={styles.searchInput}
              />
            </View>
          ))}
          <View style={styles.buttonContainer}>
            <Button title="Build" onPress={() => {}} color="#4527a0" />
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.totalPrice}>Total Price: ₹{totalPrice}</Text>
            <Text style={styles.performanceText}>Performance: {performance}%</Text>
            <View style={styles.performanceBar}>
              <View style={[styles.performanceFill, { width: `${performance}%`, backgroundColor: performance >= 80 ? 'green' : performance >= 50 ? 'orange' : 'red' }]}>
                <Text style={styles.performancePercentage}>{performance}%</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'transparent',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  componentContainer: {
    marginVertical: 10,
  },
  componentName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  searchInput: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 8,
    backgroundColor: 'white',
    borderRadius: 17, 
  },
  buttonContainer: {
    borderRadius: 17,
    overflow: 'hidden', 
    marginBottom: 10,
  },
  priceContainer: {
    alignItems: 'center',
  },
  totalPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  performanceText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  performanceBar: {
    width: '100%',
    height: 20,
    backgroundColor: 'gray',
    borderRadius: 10,
    marginBottom: 10,
  },
  performanceFill: {
    height: '100%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  performancePercentage: {
    color: 'white',
    position: 'absolute',
    zIndex: 1,
  },
});

export default DetailScreen;

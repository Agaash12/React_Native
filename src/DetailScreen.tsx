import React, { useState, useRef, useEffect } from 'react';
import { View, Button, Text, TextInput, ImageBackground, ScrollView, TouchableOpacity, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
interface ComponentData {
  [component: string]: {
    models: { name: string; price: number }[];
  };
}

const DetailScreen = () => {
  const navigation = useNavigation();

  const componentData: ComponentData = {
    Processor: {
      models: [
        { name: 'AMD Ryzen 9 5950X', price: 60000 },
        { name: 'Intel Core i9-10900K', price: 37000 },
        { name: 'AMD Ryzen 7 5800X', price: 40000 },
        { name: 'Intel Core i7-10700K', price: 28000 },
        { name: 'AMD Ryzen 5 5600X', price: 25000 },
        { name: 'Intel Core i5-10600K', price: 18000 },
        { name: 'AMD Ryzen 9 5900X', price: 45000 },
        { name: 'Intel Core i9-11900K', price: 45000 },
        { name: 'AMD Ryzen 7 3700X', price: 30000 },
        { name: 'Intel Core i5-11400', price: 13000 }
      ]
    },
    Motherboard: {
      models: [
        { name: 'Gigabyte B550 AORUS PRO AC', price: 18000 },
        { name: 'ASUS TUF Gaming B550-PLUS', price: 12000 },
        { name: 'MSI MAG B550 Tomahawk', price: 15000 },
        { name: 'ASRock B550 Steel Legend', price: 14000 },
        { name: 'ASUS ROG Strix B550-F Gaming', price: 17000 },
        { name: 'Gigabyte X570 AORUS Elite WiFi', price: 20000 },
        { name: 'ASUS Prime X570-P', price: 15000 },
        { name: 'MSI MPG X570 Gaming Plus', price: 18000 }
      ]
    },
    RAM: {
      models: [
        { name: 'Corsair Vengeance LPX 16GB (2x8GB) DDR4 3200MHz', price: 6000 },
        { name: 'G.Skill Ripjaws V Series 16GB (2x8GB) DDR4 3600MHz', price: 7000 },
        { name: 'Crucial Ballistix RGB 16GB (2x8GB) DDR4 3200MHz', price: 6500 },
        { name: 'Kingston HyperX Fury 16GB (2x8GB) DDR4 3200MHz', price: 6500 },
      { name: 'Team T-Force Vulcan Z 16GB (2x8GB) DDR4 3200MHz', price: 6000 },
      { name: 'Patriot Viper Steel Series 16GB (2x8GB) DDR4 3600MHz', price: 7500 },
      { name: 'ADATA XPG Spectrix D41 16GB (2x8GB) DDR4 3200MHz', price: 7000 },
      { name: 'Corsair Dominator Platinum RGB 16GB (2x8GB) DDR4 3600MHz', price: 8500 },
      { name: 'G.Skill Trident Z RGB 16GB (2x8GB) DDR4 3600MHz', price: 8000 },
      { name: 'Crucial Ballistix MAX 16GB (2x8GB) DDR4 4000MHz', price: 8500 }
      ]
    },
    Storage: {
      models: [
        { name: 'Samsung 970 EVO Plus 1TB NVMe M.2 SSD', price: 13500 },
        { name: 'WD Blue SN550 1TB NVMe M.2 SSD', price: 11000 },
        { name: 'Seagate Barracuda 2TB 3.5-inch HDD', price: 4500 },
        { name: 'Crucial MX500 1TB SATA 2.5-inch SSD', price: 9000 },
        { name: 'Kingston A2000 1TB NVMe M.2 SSD', price: 10000 },
        { name: 'WD Blue 2TB 3.5-inch HDD', price: 4500 },
        { name: 'Adata XPG SX8200 Pro 1TB NVMe M.2 SSD', price: 12000 },
        { name: 'Toshiba P300 2TB 3.5-inch HDD', price: 4500 },
        { name: 'Seagate FireCuda 520 1TB NVMe M.2 SSD', price: 14000 },
        { name: 'HGST Deskstar 4TB 3.5-inch HDD', price: 8000 }
      ]
    },
    Cabinet: {
      models: [
        { name: 'NZXT H510 Mid Tower ATX Case', price: 7000 },
        { name: 'Cooler Master MasterBox TD500 Mesh ARGB Mid Tower Case', price: 8000 },
        { name: 'Corsair Carbide Series SPEC-DELTA RGB Mid Tower Case', price: 6000 },
        { name: 'Phanteks Eclipse P400A Mid Tower ATX Case', price: 8000 },
        { name: 'Fractal Design Meshify C Compact Mid Tower Case', price: 7000 },
        { name: 'Thermaltake Versa H18 Micro ATX Mini Tower Case', price: 4000 },
        { name: 'Lian Li Lancool II Mesh Mid Tower Case', price: 10000 },
        { name: 'Deepcool MATREXX 55 V3 ADD-RGB Mid Tower Case', price: 5000 },
        { name: 'Cougar MX330 Mid Tower Case', price: 4000 },
        { name: 'SilverStone Technology FARA R1 Mid Tower Case', price: 6000 }
      ]
    },
    GPU: {
      models: [
        { name: 'NVIDIA GeForce RTX 3080', price: 92500 },
        { name: 'AMD Radeon RX 6800 XT', price: 82500 },
        { name: 'NVIDIA GeForce RTX 3070', price: 62500 },
        { name: 'AMD Radeon RX 6700 XT', price: 52500 },
        { name: 'NVIDIA GeForce RTX 3060 Ti', price: 52500 },
        { name: 'AMD Radeon RX 6600 XT', price: 42500 },
        { name: 'NVIDIA GeForce RTX 3050 Ti', price: 35000 },
        { name: 'NVIDIA GeForce GTX 1660 Super', price: 30000 },
        { name: 'AMD Radeon RX 5600 XT', price: 25000 },
        { name: 'NVIDIA GeForce GTX 1650 Super', price: 21500 }
      ]
    },
    Monitor: {
      models: [
        { name: 'LG 27UK850-W 27-inch 4K IPS Monitor', price: 40000 },
        { name: 'ASUS VG248QE 24-inch Full HD Gaming Monitor', price: 22500 },
        { name: 'Dell S2721QS 27-inch 4K IPS Monitor', price: 35000 },
        { name: 'Samsung Odyssey G7 27-inch QHD Curved Gaming Monitor', price: 50000 },
        { name: 'BenQ EX2780Q 27-inch QHD IPS Entertainment Monitor', price: 45000 },
        { name: 'AOC C24G1 24-inch Full HD Curved Gaming Monitor', price: 17500 },
        { name: 'ViewSonic VX3276-2K-MHD 32-inch QHD IPS Monitor', price: 30000 },
        { name: 'Acer Predator XB271HU 27-inch WQHD Gaming Monitor', price: 45000 },
        { name: 'ASUS ROG Swift PG279Q 27-inch WQHD Gaming Monitor', price: 55000 },
        { name: 'MSI Optix MAG241C 24-inch Full HD Curved Gaming Monitor', price: 22500 }
      ]
    },
    SMP: {
      models: [
        { name: 'Corsair RM750x 750W 80+ Gold Fully Modular PSU', price: 10000 },
        { name: 'EVGA SuperNOVA 650 G3 650W 80+ Gold Fully Modular PSU', price: 9000 },
        { name: 'Seasonic Focus GX-650 650W 80+ Gold Fully Modular PSU', price: 9000 },
        { name: 'Cooler Master MWE Gold 750W 80+ Gold Fully Modular PSU', price: 8000 },
        { name: 'Thermaltake Toughpower GF1 650W 80+ Gold Fully Modular PSU', price: 8000 },
        { name: 'NZXT C650 650W 80+ Gold Fully Modular PSU', price: 8000 },
        { name: 'be quiet! Straight Power 11 650W 80+ Gold Fully Modular PSU', price: 9000 },
        { name: 'Antec Earthwatts Gold Pro 750W 80+ Gold Fully Modular PSU', price: 10000 },
        { name: 'Gigabyte P750GM 750W 80+ Gold Fully Modular PSU', price: 9000 },
        { name: 'ASUS ROG Strix 650W 80+ Gold Fully Modular PSU', price: 10000 }
      ]
    }  
    
  };

  const [searchValues, setSearchValues] = useState<{ [key: string]: string }>({});
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [performance, setPerformance] = useState<number>(0);
  const [selectedComponent, setSelectedComponent] = useState<string | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<TextInput>(null);
  const dropdownScrollRef = useRef<ScrollView>(null);
  const [shouldScrollToEnd, setShouldScrollToEnd] = useState<boolean>(false);
  const handleSearchChange = (name: string, value: string) => {
    setSearchValues(prevValues => ({ ...prevValues, [name]: value }));
    setShouldScrollToEnd(true); 
  };

  useEffect(() => {
    if (shouldScrollToEnd && dropdownScrollRef.current) {
      dropdownScrollRef.current.scrollToEnd({ animated: true });
      setShouldScrollToEnd(false);
    }
  }, [shouldScrollToEnd, dropdownScrollRef]);


  const calculateTotalPrice = () => {
    let total = 0;
    for (const component in componentData) {
      const selectedModel = searchValues[component];
      if (selectedModel) {
        const model = componentData[component].models.find(m => m.name === selectedModel);
        if (model) {
          total += model.price;
        }
      }
    }
    setTotalPrice(total);
    let performanceValue = 0;
    if (total <= 50000) {
      performanceValue = 40;
    } else if (total <= 100000) {
      performanceValue = 55;
    } else if (total <= 140000) {
      performanceValue = 60;
    } else if (total <= 170000) {
      performanceValue = 81;
    } else if (total <= 200000) {
      performanceValue = 85;
    } else {
      performanceValue = 89;
    }
    setPerformance(performanceValue);
  };

  const navigateToAutomaticBuilder = () => {
    navigation.navigate('Go back' as never); 
  };
  const resetValues = () => {
    setSearchValues({});
    setTotalPrice(0);
    setPerformance(0);
    closeDropdown(); 
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <TouchableWithoutFeedback onPress={closeDropdown}>
      <ImageBackground
        source={require('../assets/Pc1.jpg')}
        style={styles.backgroundImage}
      >
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={styles.container}>
            <View style={styles.buttonContainer}>
              <Button title="Pre-Build" onPress={navigateToAutomaticBuilder} color="#4527a0" />
              <TouchableOpacity onPress={resetValues}>
                <Text style={styles.resetButton}>↺</Text>
              </TouchableOpacity>
            </View>
            {Object.keys(componentData).map((component, index) => (
              <View key={index} style={styles.componentContainer}>
                <Text style={styles.componentName}>{component}</Text>
                <TouchableOpacity
                  onPress={() => {
                    setSelectedComponent(component);
                    setIsDropdownOpen(true);
                  }}
                >
                  <TextInput
                    placeholder={`Search ${component}`}
                    value={searchValues[component] || ''}
                    editable={false}
                    style={styles.searchInput}
                    ref={dropdownRef} 
                  />
                </TouchableOpacity>
                {isDropdownOpen && selectedComponent === component && (
                  <View style={styles.dropdown}>
                    <ScrollView ref={dropdownScrollRef}>
                      {componentData[component].models.map((model, modelIndex) => (
                        <TouchableOpacity
                          key={modelIndex}
                          onPress={() => {
                            handleSearchChange(component, model.name);
                            setIsDropdownOpen(false);
                          }}
                        >
                          <Text style={[styles.dropdownItem, searchValues[component] === model.name && styles.selectedItem]}>
                            {model.name}: ₹{model.price}
                          </Text>
                        </TouchableOpacity>
                      ))}
                    </ScrollView>
                  </View>
                )}
              </View>
            ))}
            <View style={styles.buttonContainer}>
              <Button title="Build" onPress={calculateTotalPrice} color="#4527a0" />
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
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  selectedItem: {
  backgroundColor: '#ccc', 
  color: 'black', 
  fontSize: 16, 
},
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center',
    marginTop: 10,
  },
  resetButton: {
    fontSize: 30,
    marginLeft: 10,
    color: '#FFFFFF',
  },
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
    position: 'relative', 
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
  dropdown: {
    position: 'absolute',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    top: '100%', 
    left: 0,
    right: 0,
    zIndex: 1,
  },
  dropdownItem: {
    padding: 10
  }
});

export default DetailScreen;

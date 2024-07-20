import React, { useState } from 'react';
import { View, Text, Button, ImageBackground, StyleSheet, TouchableOpacity, GestureResponderEvent, ScrollView } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';

interface DropdownSelectorProps {
  options: string[];
  selectedValue: string;
  onValueChange: (value: string) => void;
  label: string;
}

interface BudgetSliderProps {
  min: number;
  max: number;
  value: number;
  onValueChange: (value: number) => void;
}

interface ComponentModel {
  type: string;
  name: string;
  price: number;
}

const DropdownSelector: React.FC<DropdownSelectorProps> = ({ options, selectedValue, onValueChange, label }) => (
  <View style={styles.dropdownContainer}>
    <Text style={styles.dropdownLabel}>{label}</Text>
    <ModalDropdown
      options={options}
      onSelect={(index, value) => onValueChange(value as string)}
      defaultValue={`Select ${label}`}
      style={styles.dropdown}
    />
  </View>
);

const BudgetSlider: React.FC<BudgetSliderProps> = ({ min, max, value, onValueChange }) => {
  const [sliderWidth, setSliderWidth] = useState<number>(0);
  const SLIDER_SNAP_INCREMENT = 1000;

  const handleTouch = (event: GestureResponderEvent) => {
    const { locationX } = event.nativeEvent;
    let newValue = (locationX / sliderWidth) * (max - min) + min;

    newValue = Math.max(min, Math.min(newValue, max));
    newValue = Math.round(newValue / SLIDER_SNAP_INCREMENT) * SLIDER_SNAP_INCREMENT;

    onValueChange(newValue);
  };

  const thumbPosition = (value - min) / (max - min) * sliderWidth;

  return (
    <TouchableOpacity
      style={styles.slider}
      onLayout={(event) => setSliderWidth(event.nativeEvent.layout.width)}
      onPress={handleTouch}
    >
      <View style={[styles.sliderTrack, { width: `${((value - min) / (max - min)) * 100}%` }]} />
      <View style={[styles.sliderThumb, { left: thumbPosition }]} />
    </TouchableOpacity>
  );
};

const AutomaticBuilder: React.FC = () => {
  const [budget, setBudget] = useState<number>(0);
  const [processorType, setProcessorType] = useState<string>('');
  const [storageType, setStorageType] = useState<string>('');
  const [gpuType, setGpuType] = useState<string>('');
  const [performance, setPerformance] = useState<number>(0);
  const [selectedComponents, setSelectedComponents] = useState<ComponentModel[]>([]);

  const processorOptions = ['AMD', 'INTEL'];
  const storageOptions = ['HDD', 'SSD', 'BOTH'];
  const gpuOptions = ['NVIDIA', 'AMD'];

  const handleSubmit = () => {
    const maxComponentPrice = budget / selectedComponents.length;
  
    const selectRandomComponentWithinBudget = (components: ComponentModel[], type: string): ComponentModel => {
      let randomComponent;
      do {
        randomComponent = selectRandomComponent(components, type);
      } while (randomComponent.price > maxComponentPrice);
      return randomComponent;
    };
  
    const selectedProcessor = selectRandomComponentWithinBudget(processors, 'Processor'); // removed []
    const selectedStorage = selectRandomComponentWithinBudget(storages[storageType], 'Storage');
    const selectedGPU = selectRandomComponentWithinBudget(gpus[gpuType], 'GPU');
    const selectedMotherboard = selectRandomComponentWithinBudget(motherboards, 'Motherboard');
    const selectedRAM = selectRandomComponentWithinBudget(ram, 'RAM');
    const selectedPSU = selectRandomComponentWithinBudget(powerSupplies, 'Power Supply');
    const selectedCabinet = selectRandomComponentWithinBudget(cabinets, 'Cabinet');
  
    const totalSelectedComponentsPrice =
      selectedProcessor.price +
      selectedStorage.price +
      selectedGPU.price +
      selectedMotherboard.price +
      selectedRAM.price +
      selectedPSU.price +
      selectedCabinet.price;
  
    let calculatedPerformance = Math.floor(Math.random() * 51) + 40;
    calculatedPerformance += Math.floor((totalSelectedComponentsPrice / 600000) * 50);
    calculatedPerformance = Math.max(40, Math.min(90, calculatedPerformance));
    setPerformance(calculatedPerformance);
  
    setSelectedComponents([
      { type: 'Processor', name: selectedProcessor.name, price: selectedProcessor.price },
      { type: 'Storage', name: selectedStorage.name, price: selectedStorage.price },
      { type: 'GPU', name: selectedGPU.name, price: selectedGPU.price },
      { type: 'Motherboard', name: selectedMotherboard.name, price: selectedMotherboard.price },
      { type: 'RAM', name: selectedRAM.name, price: selectedRAM.price },
      { type: 'Power Supply', name: selectedPSU.name, price: selectedPSU.price },
      { type: 'Cabinet', name: selectedCabinet.name, price: selectedCabinet.price },
    ]);
  };
  
  const selectRandomComponent = (components: ComponentModel[], type: string): ComponentModel => {
    const randomIndex = Math.floor(Math.random() * components.length);
    const selectedComponent = components[randomIndex];
    return {
      ...selectedComponent,
      type: type,
    };
  };

  const processors: ComponentModel[] = [
    { type: 'processor', name: 'AMD Ryzen 9 5950X', price: 60000 },
    { type: 'processor', name: 'AMD Ryzen 7 5800X', price: 40000 },
    { type: 'processor', name: 'AMD Ryzen 5 5600X', price: 25000 },
    { type: 'processor', name: 'AMD Ryzen 9 5900X', price: 45000 },
    { type: 'processor', name: 'AMD Ryzen 7 3700X', price: 30000 }
  ];

  const storages: { [key: string]: ComponentModel[] } = {
    'HDD': [
        { type: 'storage', name: 'Seagate Barracuda 2TB 3.5-inch HDD', price: 4500 },
        { type: 'storage', name: 'WD Blue 2TB 3.5-inch HDD', price: 4500 },
        { type: 'storage', name: 'Toshiba P300 2TB 3.5-inch HDD', price: 4500 },
        { type: 'storage', name: 'HGST Deskstar 4TB 3.5-inch HDD', price: 8000 }
    ],
    'SSD': [
        { type: 'storage', name: 'Samsung 970 EVO Plus 1TB NVMe M.2 SSD', price: 13500 },
        { type: 'storage', name: 'WD Blue SN550 1TB NVMe M.2 SSD', price: 11000 },
        { type: 'storage', name: 'Crucial MX500 1TB SATA 2.5-inch SSD', price: 9000 },
        { type: 'storage', name: 'Kingston A2000 1TB NVMe M.2 SSD', price: 10000 }
    ],
    'BOTH': [
        { type: 'storage', name: 'Samsung 970 EVO Plus 1TB NVMe M.2 SSD', price: 13500 },
        { type: 'storage', name: 'WD Blue SN550 1TB NVMe M.2 SSD', price: 11000 },
        { type: 'storage', name: 'Seagate Barracuda 2TB 3.5-inch HDD', price: 4500 },
        { type: 'storage', name: 'Crucial MX500 1TB SATA 2.5-inch SSD', price: 9000 },
        { type: 'storage', name: 'WD Blue 2TB 3.5-inch HDD', price: 4500 }
    ]
  };

  const gpus: { [key: string]: ComponentModel[] } = {
    'NVIDIA': [
        { type: 'gpu', name: 'NVIDIA GeForce RTX 3080', price: 92500 },
        { type: 'gpu', name: 'NVIDIA GeForce RTX 3070', price: 62500 },
        { type: 'gpu', name: 'NVIDIA GeForce RTX 3060 Ti', price: 52500 },
        { type: 'gpu', name: 'NVIDIA GeForce RTX 3050 Ti', price: 35000 },
        { type: 'gpu', name: 'NVIDIA GeForce GTX 1660 Super', price: 30000 },
        { type: 'gpu', name: 'NVIDIA GeForce GTX 1650 Super', price: 21500 }
    ],
    'AMD': [
        { type: 'gpu', name: 'AMD Radeon RX 6800 XT', price: 82500 },
        { type: 'gpu', name: 'AMD Radeon RX 6700 XT', price: 52500 },
        { type: 'gpu', name: 'AMD Radeon RX 6600 XT', price: 42500 },
        { type: 'gpu', name: 'AMD Radeon RX 5600 XT', price: 25000 }
    ]
  };
  
  const motherboards: ComponentModel[] = [
    { type: 'motherboard', name: 'ASUS ROG Strix X570-E Gaming', price: 30000 },
    { type: 'motherboard', name: 'GIGABYTE Z490 AORUS Elite AC', price: 22000 },
    { type: 'motherboard', name: 'MSI MPG B550 Gaming Edge WiFi', price: 18000 },
    { type: 'motherboard', name: 'ASRock B450M Steel Legend', price: 12000 },
    { type: 'motherboard', name: 'ASUS Prime H310M-E R2.0', price: 8000 }
  ];

  const ram: ComponentModel[] = [
    { type: 'ram', name: 'Corsair Vengeance LPX 16GB (2 x 8GB) DDR4 3200MHz', price: 8000 },
    { type: 'ram', name: 'G.SKILL Ripjaws V Series 16GB (2 x 8GB) DDR4 3600MHz', price: 9000 },
    { type: 'ram', name: 'Crucial Ballistix 32GB (2 x 16GB) DDR4 3200MHz', price: 16000 },
    { type: 'ram', name: 'HyperX Fury 8GB DDR4 2666MHz', price: 4000 }
  ];
  
  const powerSupplies: ComponentModel[] = [
    { type: 'powerSupply', name: 'EVGA SuperNOVA 750 G5 80 Plus Gold 750W', price: 15000 },
    { type: 'powerSupply', name: 'Corsair RM750x 80 Plus Gold 750W', price: 14000 },
    { type: 'powerSupply', name: 'Seasonic FOCUS GX-750, 80 Plus Gold 750W', price: 16000 },
    { type: 'powerSupply', name: 'Thermaltake Toughpower GF1 750W, 80 Plus Gold', price: 13000 }
  ];

  const cabinets: ComponentModel[] = [
    { type: 'cabinet', name: 'NZXT H510 Compact ATX Mid-Tower Case', price: 8000 },
    { type: 'cabinet', name: 'Corsair 4000D Airflow Tempered Glass Mid-Tower ATX Case', price: 10000 },
    { type: 'cabinet', name: 'Cooler Master MasterBox Q300L Micro-ATX Tower', price: 6000 },
    { type: 'cabinet', name: 'Fractal Design Meshify C - Compact Mid Tower Case', price: 9000 }
  ];
  
  const renderSelectedComponents = () => {
    return (
      <View style={styles.selectedComponentsContainer}>
        <Text style={styles.selectedComponentsTitle}>Selected Components:</Text>
        {selectedComponents.map((component, index) => (
          <View key={index} style={styles.componentItem}>
            <Text style={styles.componentProperty}>{component.type.toUpperCase()}:</Text>
            <Text style={styles.componentName}>{component.name}</Text>
            <Text style={styles.componentPrice}>{formatToCurrency(component.price)}</Text>
          </View>
        ))}
      </View>
    );
  };

  const formatToCurrency = (amount: number) => {
    return '₹' + amount.toLocaleString('en-IN', { maximumFractionDigits: 0 });
  };

  const calculatePerformanceColor = (percentage: number) => {
    if (percentage >= 75) {
      return '#00FF00'; 
    } else if (percentage >= 50) {
      return '#FFFF00'; 
    } else {
      return '#FF0000'; 
    }
  };

  return (
    <ImageBackground
      source={require('../assets/Pc1.jpg')} 
      style={styles.backgroundImage}
    >
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
          <Text style={styles.title}>Automatic PC Builder</Text> 
          <View style={styles.sliderContainer}>
            <Text style={styles.sliderText}>Budget: {formatToCurrency(budget)}</Text>
            <BudgetSlider
              min={0}
              max={600000}
              value={budget}
              onValueChange={setBudget}
            />
          </View>    
          <DropdownSelector
            options={processorOptions}
            selectedValue={processorType}
            onValueChange={setProcessorType}
            label="Processor Type"
          />
          <DropdownSelector
            options={storageOptions}
            selectedValue={storageType}
            onValueChange={setStorageType}
            label="Storage Type"
          />
          <DropdownSelector
            options={gpuOptions}
            selectedValue={gpuType}
            onValueChange={setGpuType}
            label="GPU Type"
          />
          <View style={styles.buttonContainer}>
            <Button
              title="Build"
              onPress={handleSubmit}
              color="#4527a0"
            />
          </View>
  
          {selectedComponents.length > 0 && renderSelectedComponents()}
          <View style={styles.performanceContainer}>
            <Text style={styles.performanceText}>Performance: {performance}%</Text>
            <View style={styles.performanceBar}>
              <View style={[styles.performanceFill, { width: `${performance}%`, backgroundColor: calculatePerformanceColor(performance) }]} />
            </View>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
    textAlign: 'center',
  },
  dropdownContainer: {
    marginBottom: 15,
  },
  dropdownLabel: {
    color: 'white',
    marginBottom: 5,
  },
  dropdown: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 16,
  },
  sliderContainer: {
    marginBottom: 20,
  },
  sliderText: {
    color: 'white',
    marginBottom: 10,
  },
  slider: {
    height: 20,
    borderRadius: 10,
    backgroundColor: 'gray',
    flexDirection: 'row',
    alignItems: 'center',
  },
  sliderTrack: {
    height: '100%',
    backgroundColor: '#4527a0',
    borderRadius: 10,
  },
  sliderThumb: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#4527a0',
    position: 'absolute',
  },
  buttonContainer: {
    borderRadius: 15,
    overflow: 'hidden',
  },
  performanceContainer: {
    alignItems: 'center',
    marginTop: 20,
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
    position: 'relative',
  },
  performanceFill: {
    height: '100%',
    borderRadius: 10,
  },
  selectedComponentsContainer: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: 'white',
    padding: 10,
  },
  selectedComponentsTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  componentItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  componentProperty: {
    color: 'white',
    fontWeight: 'bold',
    marginRight: 5,
  },
  componentName: {
    color: 'white',
    flex: 1,
  },
  componentPrice: {
    color: 'white',
    marginLeft: 10,
  },
});

export default AutomaticBuilder;

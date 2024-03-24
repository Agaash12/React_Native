import React, { useState } from 'react';
import { View, Text, Button, ImageBackground, StyleSheet, TouchableOpacity, GestureResponderEvent } from 'react-native';
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

  const processorOptions = ['AMD', 'INTEL'];
  const storageOptions = ['HDD', 'SSD', 'BOTH'];
  const gpuOptions = ['NVIDIA', 'AMD'];

  const handleSubmit = () => {
    // Calculate performance here (for demonstration purposes, set to a dummy value)
    const calculatedPerformance = Math.floor(Math.random() * 101); // Random performance between 0 and 100
    setPerformance(calculatedPerformance);
  };

  const formatToCurrency = (amount: number) => {
    return '₹' + amount.toLocaleString('en-IN', { maximumFractionDigits: 0 });
  };

  const calculatePerformanceColor = (percentage: number) => {
    if (percentage >= 75) {
      return '#00FF00'; // Green color for high performance
    } else if (percentage >= 50) {
      return '#FFFF00'; // Yellow color for medium performance
    } else {
      return '#FF0000'; // Red color for low performance
    }
  };

  return (
    <ImageBackground
      source={require('../assets/Pc1.jpg')} // Update image path accordingly
      style={styles.backgroundImage}
    >
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

        <View style={styles.performanceContainer}>
          <Text style={styles.performanceText}>Performance: {performance}%</Text>
          <View style={styles.performanceBar}>
            <View style={[styles.performanceFill, { width: `${performance}%`, backgroundColor: calculatePerformanceColor(performance) }]} />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
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
});

export default AutomaticBuilder;

import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

interface ComponentProps {
  name: string;
  priceRange: string;
}

const HardwareComponents: React.FC = () => {
    const [searchInput, setSearchInput] = useState<string>('');
    const [filteredProcessors, setFilteredProcessors] = useState<ComponentProps[]>([]);
    const [filteredMotherboards, setFilteredMotherboards] = useState<ComponentProps[]>([]);
    const [filteredRAM, setFilteredRAM] = useState<ComponentProps[]>([]);
    const [filteredGPU, setFilteredGPU] = useState<ComponentProps[]>([]);
    const [filteredMonitors, setFilteredMonitors] = useState<ComponentProps[]>([]);
    const [filteredStorage, setFilteredStorage] = useState<ComponentProps[]>([]);
    const [filteredPowerSupplies, setFilteredPowerSupplies] = useState<ComponentProps[]>([]);
    const [filteredCabinets, setFilteredCabinets] = useState<ComponentProps[]>([]);

  const processors:ComponentProps[] = [
    { name: "AMD Ryzen 9 5950X", priceRange: "₹60,000 - ₹65,000 INR" },
    { name: "Intel Core i9-10900K", priceRange: "₹37,000 - ₹39,000 INR" },
    { name: "AMD Ryzen 7 5800X", priceRange: "₹40,000 - ₹45,000 INR" },
    { name: "Intel Core i7-10700K", priceRange: "₹28,000 - ₹31,000 INR" },
    { name: "AMD Ryzen 5 5600X", priceRange: "₹25,000 - ₹30,000 INR" },
    { name: "Intel Core i5-10600K", priceRange: "₹18,000 - ₹22,000 INR" },
    { name: "AMD Ryzen 9 5900X", priceRange: "₹45,000 - ₹50,000 INR" },
    { name: "Intel Core i9-11900K", priceRange: "₹45,000 - ₹48,000 INR" },
    { name: "AMD Ryzen 7 3700X", priceRange: "₹30,000 - ₹35,000 INR" },
    { name: "Intel Core i5-11400", priceRange: "₹13,000 - ₹16,000 INR" },
  ];

  const motherboards:ComponentProps[] = [
    { name: "ASUS ROG Strix X570-E Gaming", priceRange: "₹25,000 - ₹30,000 INR" },
    { name: "MSI MPG B550 Gaming Edge WiFi", priceRange: "₹15,000 - ₹20,000 INR" },
    { name: "Gigabyte B550 AORUS PRO AC", priceRange: "₹18,000 - ₹22,000 INR" },
    { name: "ASUS TUF Gaming B550-PLUS", priceRange: "₹12,000 - ₹15,000 INR" },
    { name: "MSI MAG B550 Tomahawk", priceRange: "₹15,000 - ₹18,000 INR" },
    { name: "ASRock B550 Steel Legend", priceRange: "₹14,000 - ₹17,000 INR" },
    { name: "ASUS ROG Strix B550-F Gaming", priceRange: "₹17,000 - ₹20,000 INR" },
    { name: "Gigabyte X570 AORUS Elite WiFi", priceRange: "₹20,000 - ₹25,000 INR" },
    { name: "ASUS Prime X570-P", priceRange: "₹15,000 - ₹18,000 INR" },
    { name: "MSI MPG X570 Gaming Plus", priceRange: "₹18,000 - ₹22,000 INR" },
  ];

  const ram:ComponentProps[] = [
    { name: "Corsair Vengeance LPX 16GB (2x8GB) DDR4 3200MHz", priceRange: "₹6,000 - ₹7,000 INR" },
    { name: "G.Skill Ripjaws V Series 16GB (2x8GB) DDR4 3600MHz", priceRange: "₹7,000 - ₹8,000 INR" },
    { name: "Crucial Ballistix RGB 16GB (2x8GB) DDR4 3200MHz", priceRange: "₹6,500 - ₹7,500 INR" },
    { name: "Kingston HyperX Fury 16GB (2x8GB) DDR4 3200MHz", priceRange: "₹6,000 - ₹7,000 INR" },
    { name: "Team T-Force Vulcan Z 16GB (2x8GB) DDR4 3200MHz", priceRange: "₹5,500 - ₹6,500 INR" },
    { name: "Patriot Viper Steel Series 16GB (2x8GB) DDR4 3600MHz", priceRange: "₹7,000 - ₹8,000 INR" },
    { name: "ADATA XPG Spectrix D41 16GB (2x8GB) DDR4 3200MHz", priceRange: "₹6,500 - ₹7,500 INR" },
    { name: "Corsair Dominator Platinum RGB 16GB (2x8GB) DDR4 3600MHz", priceRange: "₹8,000 - ₹9,000 INR" },
    { name: "G.Skill Trident Z RGB 16GB (2x8GB) DDR4 3600MHz", priceRange: "₹7,500 - ₹8,500 INR" },
    { name: "Crucial Ballistix MAX 16GB (2x8GB) DDR4 4000MHz", priceRange: "₹8,000 - ₹9,000 INR" },
  ];

  const gpu:ComponentProps[] = [
    { name: "NVIDIA GeForce RTX 3080", priceRange: "₹85,000 - ₹1,00,000 INR" },
    { name: "AMD Radeon RX 6800 XT", priceRange: "₹75,000 - ₹90,000 INR" },
    { name: "NVIDIA GeForce RTX 3070", priceRange: "₹55,000 - ₹70,000 INR" },
    { name: "AMD Radeon RX 6700 XT", priceRange: "₹45,000 - ₹60,000 INR" },
    { name: "NVIDIA GeForce RTX 3060 Ti", priceRange: " ₹45,000 - ₹60,000 INR" },
    { name: "AMD Radeon RX 6600 XT", priceRange: "₹35,000 - ₹50,000 INR" },
    { name: "NVIDIA GeForce RTX 3050 Ti", priceRange: "₹30,000 - ₹40,000 INR" },
    { name: "NVIDIA GeForce GTX 1660 Super", priceRange: "₹25,000 - ₹35,000 INR" },
    { name: "AMD Radeon RX 5600 XT", priceRange: "₹20,000 - ₹30,000 INR" },
    { name: "NVIDIA GeForce GTX 1650 Super", priceRange: "₹18,000 - ₹25,000 INR" },
  ];

  const monitors:ComponentProps[] = [
    { name: "LG 27UK850-W 27-inch 4K IPS Monitor", priceRange: "₹35,000 - ₹45,000 INR" },
    { name: "ASUS VG248QE 24-inch Full HD Gaming Monitor", priceRange: "₹20,000 - ₹25,000 INR" },
    { name: "Dell S2721QS 27-inch 4K IPS Monitor", priceRange: "₹30,000 - ₹40,000 INR" },
    { name: "Samsung Odyssey G7 27-inch QHD Curved Gaming Monitor", priceRange: "₹45,000 - ₹55,000 INR" },
    { name: "BenQ EX2780Q 27-inch QHD IPS Entertainment Monitor", priceRange: "₹40,000 - ₹50,000 INR" },
    { name: "AOC C24G1 24-inch Full HD Curved Gaming Monitor", priceRange: "₹15,000 - ₹20,000 INR" },
    { name: "ViewSonic VX3276-2K-MHD 32-inch QHD IPS Monitor", priceRange: "₹25,000 - ₹35,000 INR" },
    { name: "Acer Predator XB271HU 27-inch WQHD Gaming Monitor", priceRange: "₹40,000 - ₹50,000 INR" },
    { name: "ASUS ROG Swift PG279Q 27-inch WQHD Gaming Monitor", priceRange: "₹50,000 - ₹60,000 INR" },
    { name: "MSI Optix MAG241C 24-inch Full HD Curved Gaming Monitor", priceRange: "₹20,000 - ₹25,000 INR" },
  ];
  
  const storage:ComponentProps[] = [
    { name: "Samsung 970 EVO Plus 1TB NVMe M.2 SSD", priceRange: "₹12,000 - ₹15,000 INR" },
    { name: "WD Blue SN550 1TB NVMe M.2 SSD", priceRange: "₹10,000 - ₹12,000 INR" },
    { name: "Seagate Barracuda 2TB 3.5-inch HDD", priceRange: "₹4,000 - ₹5,000 INR" },
    { name: "Crucial MX500 1TB SATA 2.5-inch SSD", priceRange: "₹8,000 - ₹10,000 INR" },
    { name: "Kingston A2000 1TB NVMe M.2 SSD", priceRange: "₹9,000 - ₹11,000 INR" },
    { name: "WD Blue 2TB 3.5-inch HDD", priceRange: "₹4,000 - ₹5,000 INR" },
    { name: "Adata XPG SX8200 Pro 1TB NVMe M.2 SSD", priceRange: "₹11,000 - ₹13,000 INR" },
    { name: "Toshiba P300 2TB 3.5-inch HDD", priceRange: "₹4,000 - ₹5,000 INR" },
    { name: "Seagate FireCuda 520 1TB NVMe M.2 SSD", priceRange: "₹13,000 - ₹15,000 INR" },
    { name: "HGST Deskstar 4TB 3.5-inch HDD", priceRange: "₹7,000 - ₹9,000 INR" },
  ];

  const powerSupplies:ComponentProps[] = [
    { name: "Corsair RM750x 750W 80+ Gold Fully Modular PSU", priceRange: "₹9,000 - ₹11,000 INR" },
    { name: "EVGA SuperNOVA 650 G3 650W 80+ Gold Fully Modular PSU", priceRange: "₹8,000 - ₹10,000 INR" },
    { name: "Seasonic Focus GX-650 650W 80+ Gold Fully Modular PSU", priceRange: "₹8,000 - ₹10,000 INR" },
    { name: "Cooler Master MWE Gold 750W 80+ Gold Fully Modular PSU", priceRange: "₹7,000 - ₹9,000 INR" },
    { name: "Thermaltake Toughpower GF1 650W 80+ Gold Fully Modular PSU", priceRange: "₹7,000 - ₹9,000 INR" },
    { name: "NZXT C650 650W 80+ Gold Fully Modular PSU", priceRange: "₹7,000 - ₹9,000 INR" },
    { name: "be quiet! Straight Power 11 650W 80+ Gold Fully Modular PSU", priceRange: "₹8,000 - ₹10,000 INR" },
    { name: "Antec Earthwatts Gold Pro 750W 80+ Gold Fully Modular PSU", priceRange: "₹9,000 - ₹11,000 INR" },
    { name: "Gigabyte P750GM 750W 80+ Gold Fully Modular PSU", priceRange: "₹8,000 - ₹10,000 INR" },
    { name: "ASUS ROG Strix 650W 80+ Gold Fully Modular PSU", priceRange: "₹9,000 - ₹11,000 INR" }
  ];

  const cabinets:ComponentProps[] = [
    { name: "NZXT H510 Mid Tower ATX Case", priceRange: "₹6,000 - ₹8,000 INR" },
    { name: "Cooler Master MasterBox TD500 Mesh ARGB Mid Tower Case", priceRange: "₹7,000 - ₹9,000 INR" },
    { name: "Corsair Carbide Series SPEC-DELTA RGB Mid Tower Case", priceRange: "₹5,000 - ₹7,000 INR" },
    { name: "Phanteks Eclipse P400A Mid Tower ATX Case", priceRange: "₹7,000 - ₹9,000 INR" },
    { name: "Fractal Design Meshify C Compact Mid Tower Case", priceRange: "₹6,000 - ₹8,000 INR" },
    { name: "Thermaltake Versa H18 Micro ATX Mini Tower Case", priceRange: "₹3,000 - ₹5,000 INR" },
    { name: "Lian Li Lancool II Mesh Mid Tower Case", priceRange: "₹9,000 - ₹11,000 INR" },
    { name: "Deepcool MATREXX 55 V3 ADD-RGB Mid Tower Case", priceRange: "₹4,000 - ₹6,000 INR" },
    { name: "Cougar MX330 Mid Tower Case", priceRange: "₹3,000 - ₹5,000 INR" },
    { name: "SilverStone Technology FARA R1 Mid Tower Case", priceRange: "₹5,000 - ₹7,000 INR" }
  ];

  const filterComponents = (input: string) => {
    const filteredProcessors = processors.filter(component =>
      component.name.toLowerCase().includes(input.toLowerCase())
    );
    const filteredMotherboards = motherboards.filter(component =>
      component.name.toLowerCase().includes(input.toLowerCase())
    );
    const filteredRAM = ram.filter(component =>
      component.name.toLowerCase().includes(input.toLowerCase())
    );
    const filteredGPU = gpu.filter(component =>
      component.name.toLowerCase().includes(input.toLowerCase())
    );
    const filteredMonitors = monitors.filter(component =>
      component.name.toLowerCase().includes(input.toLowerCase())
    );
    const filteredStorage = storage.filter(component =>
      component.name.toLowerCase().includes(input.toLowerCase())
    );
    const filteredPowerSupplies = powerSupplies.filter(component =>
      component.name.toLowerCase().includes(input.toLowerCase())
    );
    const filteredCabinets = cabinets.filter(component =>
      component.name.toLowerCase().includes(input.toLowerCase())
    );
  
    setFilteredProcessors(filteredProcessors);
    setFilteredMotherboards(filteredMotherboards);
    setFilteredRAM(filteredRAM);
    setFilteredGPU(filteredGPU);
    setFilteredMonitors(filteredMonitors);
    setFilteredStorage(filteredStorage);
    setFilteredPowerSupplies(filteredPowerSupplies);
    setFilteredCabinets(filteredCabinets);
  };
  return (
    <View>
      <TextInput
        placeholder="Search Components"
        value={searchInput}
        onChangeText={(text) => {
          setSearchInput(text);
          filterComponents(text);
        }}
      />
      <Text>Available Processors:</Text>
      {filteredProcessors.map((processor, index) => (
        <Component key={index} name={processor.name} priceRange={processor.priceRange} />
      ))}

      <Text>Available Motherboards:</Text>
      {filteredMotherboards.map((motherboard, index) => (
        <Component key={index} name={motherboard.name} priceRange={motherboard.priceRange} />
      ))}

      <Text>Available RAM:</Text>
      {filteredRAM.map((ram, index) => (
        <Component key={index} name={ram.name} priceRange={ram.priceRange} />
      ))}

      <Text>Available GPUs:</Text>
      {filteredGPU.map((gpu, index) => (
        <Component key={index} name={gpu.name} priceRange={gpu.priceRange} />
      ))}

      <Text>Available Monitors:</Text>
      {filteredMonitors.map((monitor, index) => (
        <Component key={index} name={monitor.name} priceRange={monitor.priceRange} />
      ))}

      <Text>Available Storage:</Text>
      {filteredStorage.map((storage, index) => (
        <Component key={index} name={storage.name} priceRange={storage.priceRange} />
      ))}

      <Text>Available Power Supplies:</Text>
      {filteredPowerSupplies.map((psu, index) => (
        <Component key={index} name={psu.name} priceRange={psu.priceRange} />
      ))}

      <Text>Available Cabinets:</Text>
      {filteredCabinets.map((cabinet, index) => (
        <Component key={index} name={cabinet.name} priceRange={cabinet.priceRange} />
      ))}
    </View>
  );
};

const Component: React.FC<ComponentProps> = ({ name, priceRange }) => {
  return (
    <View>
      <Text>{name}</Text>
      <Text>{priceRange}</Text>
    </View>
  );
};

export default HardwareComponents;
    
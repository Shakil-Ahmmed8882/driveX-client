// Define the features array
const features = [
    "Turbocharged Engine",
    "Sports Mode",
    "Premium Interior",
    "All-Wheel Drive",
    "Advanced Safety Features",
    "Hybrid Powertrain",
    "Luxury Sound System",
  ];
  
  // Map features to the desired structure
  export const featuresOptions = features.map((item) => ({
    label: item,
    value: item,
  }));
  
  // Define the car types
  export const carTypesOptions = [
    { label: "Compact", value: "Compact" },
    { label: "Economy", value: "Economy" },
    { label: "Midsize", value: "Midsize" },
    { label: "Full-size", value: "Fullsize" },
    { label: "Luxury", value: "Luxury" },
    { label: "SUV", value: "Suv" },
    { label: "Minivan", value: "Minivan" },
    { label: "Convertible", value: "Convertible" },
    { label: "Pickup Truck", value: "Pickup_truck" },
  ]
import { allDistict } from "@bangladeshi/bangladesh-address";

const carCategories = [
  "Luxury",
  "SUV",
  "Midsize",
  "Compact",
  "Full-size",
  "Economy",
];

// Step 3: Map over the unique categories to form the required structure
export const categoryOptions = carCategories.map((category) => ({
  value: category,
  label: category,
}));


export const locationOptions = allDistict()?.sort()?.map((district:string) => ({
    value: district,
    label: district,
}))

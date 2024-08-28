import car1 from "../../assets/images/home/featured/car1.png";
import car2 from "../../assets/images/home/featured/car2.png";

import customerS from "../../assets/images/home/whychooseUs/customerS2.png";
import safety from "../../assets/images/home/whychooseUs/safety1.png";

export const cars = [
  // used in featured car section
  {
    name: "718 Cayman",
    price: "AED 300,000",
    imageUrl: car1,
    status: "Popular",
  },
  {
    name: "718 Cayman",
    price: "AED 300,000",
    imageUrl: car2,
    status: "Popular",
  },
  {
    name: "718 Cayman",
    price: "AED 300,000",
    imageUrl: car1,
    status: "Popular",
  },
  {
    name: "718 Boxster",
    price: "AED 330,000",
    imageUrl: car2,
    status: "Best Sellers",
  },
  {
    name: "718 Spyder",
    price: "AED 350,000",
    imageUrl: car1,
    status: "Upcoming",
  },
  {
    name: "718 Cayman GT4",
    price: "AED 370,000",
    imageUrl: car2,
    status: "Popular",
  },
];

const featuresData = [
  {
    title: "Quick to get you",
    description: "We take 2-3 business days",
    gradient: true, // Use gradient text
  },
  {
    title: "Safety and Reliability",
    subtitle: "",
    description: "We take 2-3 business days",
    image: customerS, // Image source
    gradient: false, // No gradient text
  },
  {
    title: "Safety and Reliability",
    subtitle: "",
    description: "We take 2-3 business days",
    image: safety, 
    gradient: false,
  },
];

export default featuresData;





export const testimonialsData = [
  {
    name: "John Doe",
    position: "CEO at Company",
    image:safety,
    text: "This service is amazing! The team was incredibly professional and delivered top-notch results.",
  },
  {
    name: "Jane Smith",
    position: "CTO at Another Company",
    image:safety,
    text: "I am highly impressed with the quality and timeliness of their work. Highly recommended!",
  },
  {
    name: "Alice Johnson",
    position: "Manager at Some Company",
    image:safety,
    text: "Exceptional service and support throughout the project. I will definitely work with them again.",
  },
];





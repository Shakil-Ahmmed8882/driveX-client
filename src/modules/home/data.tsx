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
    title: "Customer Service",
    subtitle: "",
    description: "We prioritize open communication.",
    image: customerS, // Image source
    gradient: false, // No gradient text
  },
  {
    title: "Safety & Reliability",
    subtitle: "",
    description: "We take 2-3 business days",
    image: safety, 
    gradient: false,
  },
];

export default featuresData;





export const testimonialsData = [
  {
    name: "Arju",
    position: "CEO at Company",
    image:"https://i2.wp.com/d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg",
    text: "This service is amazing! The team was incredibly professional and delivered top-notch results.",
  },
  {
    name: "Maisha",
    position: "CTO at Another Company",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu_83ooClxCCq-eCkvNtsUKBu5c3bm6JsMHlEQt5P-XI3LCK3m8ArRHWtEnsxd25myjnw&usqp=CAU", 
    text: "I am highly impressed with the quality and timeliness of their work. Highly recommended!",
  },
  {
    name: "Robin",
    position: "Manager at Some Company",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkAJEkJQ1WumU0hXNpXdgBt9NUKc0QDVIiaw&s",
    text: "Exceptional service and support throughout the project. I will definitely work with them again.",
  },
];





import car1 from '../../assets/images/home/featured/car1.png'
import car2 from '../../assets/images/home/featured/car2.png'

export const cars = [ // used in featured car section
    {
      name: "718 Cayman",
      price: "AED 300,000",
      imageUrl:car1,
      status: "Popular",
    },
    {
      name: "718 Cayman",
      price: "AED 300,000",
      imageUrl:car2,
      status: "Popular",
    },
    {
      name: "718 Cayman",
      price: "AED 300,000",
      imageUrl:car1,
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
      imageUrl:car2,
      status: "Popular",
    },
  ];
  


  import { FaCar, FaDollarSign, FaHandsHelping, FaShieldAlt, FaStar, FaLeaf } from "react-icons/fa";

const featuresData = [
  {
    title: "Wide Selection of Premium Vehicles",
    description:
      "Choose from a diverse fleet of vehicles, from sleek sedans to luxury cars, to suit every need and preference.",
    icon: <FaCar />,
  },
  {
    title: "Competitive Pricing",
    description:
      "Get premium car rentals at unbeatable rates with no hidden fees. Enjoy excellent value for your money.",
    icon: <FaDollarSign />,
  },
  {
    title: "Easy and Convenient Booking",
    description:
      "Our user-friendly website and app make it easy to book your car in just a few clicks. 24/7 customer support is available.",
    icon: <FaHandsHelping />,
  },
  {
    title: "Safety and Reliability",
    description:
      "All our vehicles undergo rigorous inspections and maintenance to ensure a safe and reliable driving experience.",
    icon: <FaShieldAlt />,
  },
  {
    title: "Top-Notch Customer Service",
    description:
      "Our dedicated support team is available around the clock to make your experience with us seamless and enjoyable.",
    icon: <FaStar />,
  },
  {
    title: "Eco-Friendly Options",
    description:
      "Choose from our selection of hybrid and electric vehicles for an environmentally friendly travel solution.",
    icon: <FaLeaf />,
  },
];

export default featuresData;

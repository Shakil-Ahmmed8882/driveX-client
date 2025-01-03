
  
// services
import WeddingCarHire from "../../assets/images/navbar/services/WeddingCarHire.jfif"
import AirportTransfers from "../../assets/images/navbar/services/AirportTransfers.png"
import CorporateRentals from "../../assets/images/navbar/services/CorporateRentals.png"
import ChauffeurServices from "../../assets/images/navbar/services/ChauffeurServices.jfif"
import LongTermRentals from "../../assets/images/navbar/services/Long-termRentals.jfif"
import SpecialEvents from "../../assets/images/navbar/services/SpecialEvents.jfif"

// flet
import Convertibles from "../../assets/images/navbar/fleet/Convertibles.jpg"
import Vans from "../../assets/images/navbar/fleet/Vans.jfif"



export const navItems = [
  {
    name: 'Fleet',
    description: "Explore our exclusive fleet of high-performance vehicles tailored to match your luxury and business travel needs. From sleek convertibles to spacious SUVs and electric cars, we ",
    path: '/',
    children: [
      { 
        image: "https://images.pexels.com/photos/5049270/pexels-photo-5049270.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
        name: 'SUV', 
        path: '/fleet/luxury-sedans' 
      },
      { 
        image: "https://as2.ftcdn.net/v2/jpg/10/11/16/77/1000_F_1011167790_sMYyOKHF0pftQqKzEnlJbMLPc2mQt7En.jpg", 
        name: 'Luxury', 
        path: '/fleet/sports-cars' 
      },
      { 
        image: "https://as1.ftcdn.net/v2/jpg/10/22/56/52/1000_F_1022565284_w9nKfKhb5YrFEqW7ZJUJVZhD4T2HNGQj.jpg", 
        name: 'SUV', 
        path: '/fleet/suvs' 
      },
      { 
        image: "https://as2.ftcdn.net/v2/jpg/08/51/97/15/1000_F_851971514_8A8gORcwVMu5WekUfPgEtZCT7DDHgTrU.jpg", 
        name: 'Electric', 
        path: '/fleet/electric-vehicles' 
      },
      { 
        image: Convertibles, 
        name: 'Luxury', 
        path: '/fleet/convertibles' 
      },
      { 
        image: Vans, 
        name: 'SUV', 
        path: '/fleet/vans' 
      }
    ],
  },  
    {
      name: 'Services',
      description: "Our diverse range of luxury and business-class vehicles, from sedans to SUVs, designed to provide a premium travel experience.",
      path: '/',
      children: [
        { image:AirportTransfers, name: 'Airport Transfers', path: '/services/airport-transfers' },
        { image:ChauffeurServices, name: 'Chauffeur Services', path: '/services/chauffeur-services' },
        { image:CorporateRentals, name: 'Corporate Rentals', path: '/services/corporate-rentals' },
        { image:WeddingCarHire, name: 'Wedding Car Hire', path: '/services/wedding-car-hire' },
        { image:LongTermRentals, name: 'Long-term Rentals', path: '/services/long-term-rentals' },
        { image:SpecialEvents, name: 'Special Events', path: '/services/special-events' },
      ],
    },
    { name: 'About Us', path: '/about' },
    { name: 'All Cars', path: '/all-cars' },
    { name: 'Contact', path: '/contact' },
  ];
  
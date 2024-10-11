// services
import WeddingCarHire from "../../assets/images/navbar/services/WeddingCarHire.jfif"
import AirportTransfers from "../../assets/images/navbar/services/AirportTransfers.png"
import CorporateRentals from "../../assets/images/navbar/services/CorporateRentals.png"
import ChauffeurServices from "../../assets/images/navbar/services/ChauffeurServices.jfif"
import LongTermRentals from "../../assets/images/navbar/services/Long-termRentals.jfif"
import SpecialEvents from "../../assets/images/navbar/services/SpecialEvents.jfif"

// flet
import LuxurySedans from "../../assets/images/navbar/fleet/LuxurySedans.jpg"
import SportsCars from "../../assets/images/navbar/fleet/SportsCars.jfif"
import SUVs from "../../assets/images/navbar/fleet/SUVs.jfif"
import ElectricVehicles from "../../assets/images/navbar/fleet/ElectricVehicles.jfif"
import Convertibles from "../../assets/images/navbar/fleet/Convertibles.jpg"
import Vans from "../../assets/images/navbar/fleet/Vans.jfif"



export const navItems = [
    {
      name: 'Our Fleet',
      path: '/',
      children: [
        { image:LuxurySedans, name: 'Luxury Sedans', path: '/fleet/luxury-sedans' },
        { image:SportsCars, name: 'Sports Cars', path: '/fleet/sports-cars' },
        { image:SUVs, name: 'SUVs', path: '/fleet/suvs' },
        { image:ElectricVehicles, name: 'Electric Vehicles', path: '/fleet/electric-vehicles' },
        { image:Convertibles, name: 'Convertibles', path: '/fleet/convertibles' },
        { image:Vans, name: 'Vans', path: '/fleet/vans' },
      ],
    },
    {
      name: 'Services',
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
  
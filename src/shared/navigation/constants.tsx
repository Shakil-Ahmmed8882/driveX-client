// Example navitem route array
import WeddingCarHire from "../../assets/images/navbar/fleet/WeddingCarHire.jfif"
import AirportTransfers from "../../assets/images/navbar/fleet/AirportTransfers.png"
import CorporateRentals from "../../assets/images/navbar/fleet/CorporateRentals.png"
import ChauffeurServices from "../../assets/images/navbar/fleet/ChauffeurServices.jfif"
import LongTermRentals from "../../assets/images/navbar/fleet/Long-termRentals.jfif"
import SpecialEvents from "../../assets/images/navbar/fleet/SpecialEvents.jfif"



export const navItems = [
    {
      name: 'Our Fleet',
      path: '/fleet',
      children: [
        { image:AirportTransfers, name: 'Luxury Sedans', path: '/fleet/luxury-sedans' },
        { image:ChauffeurServices, name: 'Sports Cars', path: '/fleet/sports-cars' },
        { image:CorporateRentals, name: 'SUVs', path: '/fleet/suvs' },
        { image:WeddingCarHire, name: 'Electric Vehicles', path: '/fleet/electric-vehicles' },
        { image:LongTermRentals, name: 'Convertibles', path: '/fleet/convertibles' },
        { image:SpecialEvents, name: 'Vans', path: '/fleet/vans' },
      ],
    },
    {
      name: 'Services',
      path: '/services',
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
  
import React from 'react'
import { Card, Typography, Button, List } from 'antd'
import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'


const { Title, Text } = Typography

export default function CarSuggestionList() {
  const carSuggestions = [
    { name: "Tesla Model 3", price: 55, image: "https://images.pexels.com/photos/17454904/pexels-photo-17454904/free-photo-of-twinning-celica-s.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", link: "/cars/tesla-model-3" },
    { name: "BMW 3 Series", price: 60, image: "https://images.pexels.com/photos/28996506/pexels-photo-28996506/free-photo-of-sleek-white-sports-car-by-scenic-lake.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", link: "/cars/bmw-3-series" },
    { name: "Audi A4", price: 58, image: "https://images.pexels.com/photos/2365572/pexels-photo-2365572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", link: "/cars/audi-a4" },
    { name: "Audi A4", price: 58, image: "https://images.pexels.com/photos/7343051/pexels-photo-7343051.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", link: "/cars/audi-a4" },
    { name: "Audi A4", price: 58, image: "https://images.pexels.com/photos/29013445/pexels-photo-29013445/free-photo-of-sporty-white-car-on-a-scenic-road-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", link: "/cars/audi-a4" },
  ]

  return (
    <Card className="w-full bg-gray-50 mt-8 h-screen sticky top-0 overflow-y-scroll " title={<Title level={4}>You might also like</Title>}>
      <List
        dataSource={carSuggestions}
        renderItem={(car) => (
          <List.Item>
            <Card
             className='w-full group  hover:!shadow-sm overflow-hidden'
              hoverable
              cover={
                <Link to={'/'}>
                  <img alt={car.name} src={car.image} className="h-32 w-full object-cover group-hover:scale-105 transition-all duration-500" />
                </Link>
              }
              bodyStyle={{ padding: '12px' }}
            >
              <Card.Meta
                title={<Text strong>{car.name}</Text>}
                description={<Text type="secondary">${car.price}/day</Text>}
              />
              <Button type="link" className="w-full mt-2 flex items-center justify-between text-primaryColor" href={car.link}>
                View Details
                <ChevronRight size={16} />
              </Button>
            </Card>
          </List.Item>
        )}
      />
    </Card>
  )
}
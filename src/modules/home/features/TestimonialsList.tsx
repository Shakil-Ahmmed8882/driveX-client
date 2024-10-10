import React from 'react';
import { Typography, Carousel, Card, Avatar, Rate } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const testimonialsData = [
  {
    name: "John Doe",
    position: "Business Executive",
    image: "https://i.pravatar.cc/150?img=1",
    text: "DriveX provided an exceptional luxury car rental experience. The vehicle was immaculate, and the service was top-notch. I'll definitely be using their services again for my business trips.",
    rating: 5,
  },
  {
    name: "Jane Smith",
    position: "Travel Blogger",
    image: "https://i.pravatar.cc/150?img=2",
    text: "I've rented cars all over the world, and DriveX stands out for their attention to detail and customer service. The range of luxury vehicles is impressive, and the booking process was seamless.",
    rating: 5,
  },
  {
    name: "Robert Johnson",
    position: "Wedding Planner",
    image: "https://i.pravatar.cc/150?img=3",
    text: "DriveX made my client's wedding day extra special with their luxury car service. The chauffeur was professional, and the car was a showstopper. Highly recommended for special occasions!",
    rating: 5,
  },
  {
    name: "Emily Chen",
    position: "Corporate Event Manager",
    image: "https://i.pravatar.cc/150?img=4",
    text: "For corporate events, DriveX is my go-to car rental service. Their fleet of high-end vehicles always impresses our clients, and their reliability is unmatched in the industry.",
    rating: 5,
  },
];

const TestimonialsList: React.FC = () => {
  return (
    <section style={{ padding: '64px 0', background: '#fff' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 16px' }}>
        <Title level={2} style={{ textAlign: 'center', color: '#000', marginBottom: '16px' }}>
          What Our Clients Say
        </Title>
        <Paragraph style={{ textAlign: 'center', color: '#a0aec0', fontSize: '18px', marginBottom: '48px' }}>
          Discover why our clients choose DriveX for their luxury car rental needs
        </Paragraph>

        <Carousel autoplay effect="fade" className='text-red-600'>
          {testimonialsData.map((testimonial, index) => (
            <div key={index}>
              <Card
                style={{ 
                  background: 'rgba(255, 255, 255, 0.1)', 
                  borderRadius: '12px',
                  backdropFilter: 'blur(10px)',
                  border: 'none',
                  maxWidth: '800px',
                  margin: '0 auto',
                  padding: '32px'
                }}
                bodyStyle={{ padding: 0 }}
              >
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
                  <Avatar 
                    size={64} 
                    src={testimonial.image} 
                    icon={<UserOutlined />}
                    style={{ marginRight: '16px' }}
                  />
                  <div>
                    <Title level={4} style={{ color: '#000', margin: 0 }}>{testimonial.name}</Title>
                    <Paragraph style={{ color: '#a0aec0', margin: 0 }}>{testimonial.position}</Paragraph>
                  </div>
                </div>
                <Paragraph style={{ color: '#000', fontSize: '18px', marginBottom: '16px' }}>
                  "{testimonial.text}"
                </Paragraph>
                <Rate disabled defaultValue={testimonial.rating} style={{ color: '#f0b90b' }} />
              </Card>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsList;
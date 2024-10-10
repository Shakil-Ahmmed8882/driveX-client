

import React from 'react';
import { Typography, Row, Col, Card, Button } from 'antd';
import { ClockCircleOutlined, SafetyCertificateOutlined, CarOutlined } from '@ant-design/icons';
import Container from '../../../shared/layouts/Container';

const { Title, Paragraph } = Typography;

const featuresData = [
  {
    icon: <ClockCircleOutlined style={{ fontSize: '36px', color: '#1890ff' }} />,
    title: "24/7 Availability",
    description: "Our services are available round the clock, ensuring you can rent a car whenever you need it."
  },
  {
    icon: <SafetyCertificateOutlined style={{ fontSize: '36px', color: '#1890ff' }} />,
    title: "Premium Insurance",
    description: "Every rental comes with comprehensive insurance coverage for your peace of mind."
  },
  {
    icon: <CarOutlined style={{ fontSize: '36px', color: '#1890ff' }} />,
    title: "Luxury Fleet",
    description: "Choose from our wide range of high-end vehicles to match your style and needs."
  }
];

const WhyChooseUs: React.FC = () => {
  return (
    <section style={{ padding: '64px 0', background: '#f0f2f5' }}>
      <Container>
      <Row justify="center">
        <Col xs={24} md={20} lg={18}>
          <Title level={2} style={{ textAlign: 'center', marginBottom: '16px' }}>
            Why Choose DriveX?
          </Title>
          <Paragraph style={{ textAlign: 'center', fontSize: '18px', marginBottom: '48px' }}>
            Experience luxury and convenience in every journey
          </Paragraph>
          
          <Row gutter={[24, 24]}>
            {featuresData.map((feature, index) => (
              <Col xs={24} md={8} key={index}>
                <Card
                  hoverable
                  style={{ height: '100%' }}
                  cover={
                    <div style={{ padding: '24px', textAlign: 'center' }}>
                      {feature.icon}
                    </div>
                  }
                >
                  <Card.Meta
                    title={<Title level={4}>{feature.title}</Title>}
                    description={<Paragraph>{feature.description}</Paragraph>}
                  />
                </Card>
              </Col>
            ))}
          </Row>
          
          <Row justify="center" style={{ marginTop: '48px' }}>
            <Col>
              <Button type="primary" size="large" href="#book-now">
                Book Your Luxury Ride Now
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
      </Container>
    </section>
  );
};

export default WhyChooseUs;
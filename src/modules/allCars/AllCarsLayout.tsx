


import React, { useState } from 'react';
import { Layout, Typography, Input, Card, Row, Col, Tag, Rate, Statistic } from 'antd';
import { SearchOutlined, CarOutlined, UserOutlined, EnvironmentOutlined } from '@ant-design/icons';
import { useGetAllCarsQuery } from "../../redux/features/cars/carsApi";
import { TCar } from "./type";
import { Link } from 'react-router-dom';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const AllCarsLayout: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");
  const { data: carData, isLoading } = useGetAllCarsQuery([
    { name: "searchTerm", value: searchValue },
  ]);

  return (
    <Layout>
      <Content style={{ padding: '50px 50px' }}>
        <div style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '300px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '50px',
          borderRadius: '15px',
          position: 'relative'
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            borderRadius: '15px'
          }}></div>
          <div style={{ zIndex: 1, textAlign: 'center' }}>
            <Title style={{ color: 'white' }}>Explore Our Fleet</Title>
            <Paragraph style={{ color: 'white', fontSize: '18px' }}>
              Find the perfect car for your journey
            </Paragraph>
            <Input
              size="large"
              placeholder="Search for cars..."
              prefix={<SearchOutlined />}
              style={{ width: '50%', minWidth: '300px' }}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>
        </div>

        <Row gutter={[24, 24]}>
          {isLoading ? (
            <Col span={24}>
              <Card loading={true}></Card>
            </Col>
          ) : (
            carData?.data?.map((car: TCar) => (
              <Col xs={24} sm={12} md={8} lg={6} key={car._id}>
                <Link to={`/cars/${car._id}`}>
                  <Card
                    hoverable
                    cover={<img alt={car.name} src={car.image} style={{ height: 200, objectFit: 'cover' }} />}
                    actions={[
                      <Statistic title="Per Hour" value={`$${car.pricePerHour}`} precision={2} />,
                      <Rate disabled defaultValue={4} style={{ fontSize: '14px' }} />
                    ]}
                  >
                    <Card.Meta
                      title={car.name}
                      description={
                        <>
                          <Paragraph ellipsis={{ rows: 2 }}>{car.description}</Paragraph>
                          <div style={{ marginTop: '10px' }}>
                            <Tag icon={<CarOutlined />} color="blue">{car.status}</Tag>
                            <Tag icon={<UserOutlined />} color="green">5 Seats</Tag>
                            <Tag icon={<EnvironmentOutlined />} color="orange">GPS</Tag>
                          </div>
                        </>
                      }
                    />
                  </Card>
                </Link>
              </Col>
            ))
          )}
        </Row>
      </Content>
    </Layout>
  );
};

export default AllCarsLayout;
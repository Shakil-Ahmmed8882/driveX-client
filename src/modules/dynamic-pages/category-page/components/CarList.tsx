import { Row, Col, Card } from "antd";
import { motion, AnimatePresence } from "framer-motion";

export default function CarList({ cars }:{cars:any[]}) {
  return (
    <AnimatePresence>
      <Row gutter={[16, 16]}>
        {cars.map((car) => (
          <Col xs={24} sm={12} md={8} lg={6} key={car.id}>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.3 }}>
              <Card
                hoverable
                cover={<img alt={car.title} src={car.image} style={{ height: 200, objectFit: "cover" }} />}
              >
                <Card.Meta title={car.title} description={car.category} />
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </AnimatePresence>
  );
}

import { Row, Col, Card, Badge } from "antd";
import { motion, AnimatePresence } from "framer-motion";

import { Link } from "react-router-dom";

export default function CarList({ cars }:{cars:any[]}) {
  return (
    <AnimatePresence>
      <Row gutter={[24, 24]}>
      
        {cars.map((car) => (
          <Col xs={24} sm={12} md={8} lg={6} key={car.id}>
          <Link to={`/cars/${car?._id}`}>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.3 }}>
              <Card
                className="shadow-none hover:shadow-md group overflow-hidden"
                hoverable
                cover={<img alt={car.name} className="group-hover:scale-105 transition300" src={car.image} style={{ height: 200, }} 
                />}
              >
                <div className="flex gap-3 justify-between">
                <Card.Meta title={car.name}/>
                <Badge className="bg-[#cdfde0e8] text-[#00ff66e8] font-bold p-1 px-3 ">{car.type} </Badge>

                </div>
              </Card>
            </motion.div>
          </Link>
          </Col>
        ))}
      </Row>
    </AnimatePresence>
  );
}

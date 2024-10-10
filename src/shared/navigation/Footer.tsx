



import { Layout, Row, Col, Typography, Space, Divider } from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

const { Footer } = Layout;
const { Title, Text, Link } = Typography;

export const AppFooter = () => {
  return (
    <Footer
      style={{
        background: "linear-gradient(to right, #000, #070917)",
        padding: "48px 0",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 16px" }}>
        <Row gutter={[32, 32]}>
          <Col xs={24} sm={12} md={6}>
            <Title level={3} style={{ color: "#fff", marginBottom: "24px" }}>
              DriveX
            </Title>
            <Space direction="vertical" size="small">
              <Link href="/about" style={{ color: "#a0aec0" }}>
                About Us
              </Link>
              <Link href="/fleet" style={{ color: "#a0aec0" }}>
                Our Fleet
              </Link>
              <Link href="/locations" style={{ color: "#a0aec0" }}>
                Locations
              </Link>
              <Link href="/contact" style={{ color: "#a0aec0" }}>
                Contact Us
              </Link>
            </Space>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Title level={4} style={{ color: "#fff", marginBottom: "24px" }}>
              Services
            </Title>
            <Space direction="vertical" size="small">
              <Link href="/rentals" style={{ color: "#a0aec0" }}>
                Car Rentals
              </Link>
              <Link href="/chauffeur" style={{ color: "#a0aec0" }}>
                Chauffeur Service
              </Link>
              <Link href="/airport" style={{ color: "#a0aec0" }}>
                Airport Transfers
              </Link>
              <Link href="/events" style={{ color: "#a0aec0" }}>
                Event Transportation
              </Link>
            </Space>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Title level={4} style={{ color: "#fff", marginBottom: "24px" }}>
              Support
            </Title>
            <Space direction="vertical" size="small">
              <Link href="/faq" style={{ color: "#a0aec0" }}>
                FAQ
              </Link>
              <Link href="/terms" style={{ color: "#a0aec0" }}>
                Terms of Service
              </Link>
              <Link href="/privacy" style={{ color: "#a0aec0" }}>
                Privacy Policy
              </Link>
              <Link href="/support" style={{ color: "#a0aec0" }}>
                Customer Support
              </Link>
            </Space>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Title level={4} style={{ color: "#fff", marginBottom: "24px" }}>
              Connect With Us
            </Title>
            <Space size="large">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookOutlined
                  style={{ fontSize: "24px", color: "#a0aec0" }}
                />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwitterOutlined
                  style={{ fontSize: "24px", color: "#a0aec0" }}
                />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramOutlined
                  style={{ fontSize: "24px", color: "#a0aec0" }}
                />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinOutlined
                  style={{ fontSize: "24px", color: "#a0aec0" }}
                />
              </Link>
            </Space>
          </Col>
        </Row>
        <Divider
          style={{ borderColor: "rgba(255,255,255,0.1)", margin: "32px 0" }}
        />
        <Row justify="space-between" align="middle">
          <Col>
            <Text style={{ color: "#a0aec0" }}>
              © {new Date().getFullYear()} DriveX Luxury Car Rentals. All rights
              reserved.
            </Text>
          </Col>
          <Col>
            <Space size="large">
              <Link href="/sitemap" style={{ color: "#a0aec0" }}>
                Sitemap
              </Link>
              <Link href="/accessibility" style={{ color: "#a0aec0" }}>
                Accessibility
              </Link>
            </Space>
          </Col>
        </Row>
      </div>
    </Footer>
  );
};

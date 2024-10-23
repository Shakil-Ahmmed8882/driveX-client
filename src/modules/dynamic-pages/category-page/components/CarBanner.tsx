import { Typography } from "antd";

const { Title, Paragraph } = Typography;

export default function CarBanner({ bannerImage, category }:{ bannerImage:string, category:string }) {
  return (
    <div style={{ position: "relative", height: "400px", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "2rem", color: "black", overflow: "hidden" }}>
      <div style={{ backgroundImage: `url(${bannerImage})`, backgroundSize: "cover", backgroundPosition: "center", height: "100%", position: "absolute", top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }} />
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "linear-gradient(to top, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0) 100%)", zIndex: 1 }} />
      <div className="max-w-7xl" style={{ zIndex: 2 }}>
        <Title level={1} style={{ color: "black", marginBottom: "0.5rem" }}>
          Find Your Perfect {category}
        </Title>
        <Paragraph style={{ color: "black", fontSize: "1.2rem" }}>
          Explore our wide range of {category} to suit your travel needs.
        </Paragraph>
      </div>
    </div>
  );
}

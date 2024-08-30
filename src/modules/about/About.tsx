import React from "react";
import Container from "../../shared/layouts/Container";

const AboutUs = () => {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen py-12">
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg text-gray-400">
          Learn more about our mission, vision, and the team behind our success.
        </p>
      </header>

      <Container>
        {/* Company History */}
        <section className=" px-4 mb-16">
          <h2 className="text-2xl font-semibold mb-6">Our History</h2>
          <p className="text-gray-300 leading-relaxed">
            Founded in [Year], our company has been committed to providing the
            best car rental services. Our mission is to make transportation
            easier, more accessible, and more reliable for our customers.
          </p>
        </section>
      </Container>

      {/* Our Team */}
      <section className="bg-gray-800 py-12 mb-16">
        <Container>
          <div className=" px-4">
            <h2 className="text-2xl font-semibold mb-6">Meet the Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {/* Team Member */}
              <div className="text-center">
                <img
                  src="team-member-photo.jpg"
                  alt="Team Member"
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-medium">John Doe</h3>
                <p className="text-gray-400">CEO & Founder</p>
              </div>
              {/* Repeat for other team members */}
            </div>
          </div>
        </Container>
      </section>

      <Container>
        {/* Our Fleet */}
        <section className=" px-4 mb-16">
          <h2 className="text-2xl font-semibold mb-6">Our Fleet</h2>
          <p className="text-gray-300 leading-relaxed">
            We offer a diverse range of vehicles to suit every need, from
            economy cars to luxury SUVs. Our fleet is regularly updated to
            ensure that our customers have access to the latest models.
          </p>
        </section>
      </Container>

      {/* Values & Commitment */}
      <section className="bg-gray-800 py-12 mb-16">
        <Container>
          <div className=" px-4">
            <h2 className="text-2xl font-semibold mb-6">
              Our Values & Commitment
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We are dedicated to providing excellent customer service,
              maintaining the highest standards of vehicle maintenance, and
              supporting sustainable practices within our operations.
            </p>
          </div>
        </Container>
      </section>

      <Container>
        {/* Contact Information */}
        <section className=" px-4 mb-16">
          <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>
          <p className="text-gray-300 leading-relaxed">
            Have questions or need assistance? Reach out to us at:
          </p>
          <ul className="text-gray-400 mt-4">
            <li>
              Email:{" "}
              <a href="mailto:info@carrental.com" className="text-blue-400">
                info@carrental.com
              </a>
            </li>
            <li>Phone: +123 456 7890</li>
            <li>Address: 123 Main St, City, Country</li>
          </ul>
        </section>
      </Container>
    </div>
  );
};

export default AboutUs;

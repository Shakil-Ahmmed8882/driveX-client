// import React from "react";
import product from "../../assets/images/home/featured/bg-car.jpg";

// const AboutUs = () => {
//   return (
//     <div className="bg-gray-900 text-gray-100 min-h-screen py-12">
//       {/* Header Section */}
//       <header className="text-center mb-12">
//         <h1 className="text-4xl font-bold mb-4">About Us</h1>
//         <p className="text-lg text-gray-400">
//           Learn more about our mission, vision, and the team behind our success.
//         </p>
//       </header>

//       <Container>
//         {/* Company History */}
//         <section className=" px-4 mb-16">
//           <h2 className="text-2xl font-semibold mb-6">Our History</h2>
//           <p className="text-gray-300 leading-relaxed">
//             Founded in [Year], our company has been committed to providing the
//             best car rental services. Our mission is to make transportation
//             easier, more accessible, and more reliable for our customers.
//           </p>
//         </section>
//       </Container>

//       {/* Our Team */}
//       <section className="bg-gray-800 py-12 mb-16">
//         <Container>
//           <div className=" px-4">
//             <h2 className="text-2xl font-semibold mb-6">Meet the Team</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//               {/* Team Member */}
//               <div className="text-center">
//                 <img
//                   src="team-member-photo.jpg"
//                   alt="Team Member"
//                   className="w-24 h-24 rounded-full mx-auto mb-4"
//                 />
//                 <h3 className="text-xl font-medium">John Doe</h3>
//                 <p className="text-gray-400">CEO & Founder</p>
//               </div>
//               {/* Repeat for other team members */}
//             </div>
//           </div>
//         </Container>
//       </section>

//       <Container>
//         {/* Our Fleet */}
//         <section className=" px-4 mb-16">
//           <h2 className="text-2xl font-semibold mb-6">Our Fleet</h2>
//           <p className="text-gray-300 leading-relaxed">
//             We offer a diverse range of vehicles to suit every need, from
//             economy cars to luxury SUVs. Our fleet is regularly updated to
//             ensure that our customers have access to the latest models.
//           </p>
//         </section>
//       </Container>

//       {/* Values & Commitment */}
//       <section className="bg-gray-800 py-12 mb-16">
//         <Container>
//           <div className=" px-4">
//             <h2 className="text-2xl font-semibold mb-6">
//               Our Values & Commitment
//             </h2>
//             <p className="text-gray-300 leading-relaxed">
//               We are dedicated to providing excellent customer service,
//               maintaining the highest standards of vehicle maintenance, and
//               supporting sustainable practices within our operations.
//             </p>
//           </div>
//         </Container>
//       </section>

//       <Container>
//         {/* Contact Information */}
//         <section className=" px-4 mb-16">
//           <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>
//           <p className="text-gray-300 leading-relaxed">
//             Have questions or need assistance? Reach out to us at:
//           </p>
//           <ul className="text-gray-400 mt-4">
//             <li>
//               Email:{" "}
//               <a href="mailto:info@carrental.com" className="text-blue-400">
//                 info@carrental.com
//               </a>
//             </li>
//             <li>Phone: +123 456 7890</li>
//             <li>Address: 123 Main St, City, Country</li>
//           </ul>
//         </section>
//       </Container>
//     </div>
//   );
// };

// export default AboutUs;

import Container from "../../shared/layouts/Container";
import Description from "../../shared/ui/Description";

const AboutUs = () => {
  return (
    <div className="dark:bg-muted-foreground dark:text-background -mt-32">
        <header className="bg-primary relative h-[80vh] overflow-hidden">
          <img
            className="h-screen w-full object-center object-cover bg-blend-screen"
            src={product}
            alt="CampShop Outdoors"
          />

          {/* overlay */}
          <div className="bg-gradient-to-tr bg-blend-darken filter contrast-150 brightness-200 from-[#000000d2] to-[#00000079] w-full h-full absolute top-0"></div>

          <div className="absolute inset-0 flex items-center justify-center mt-28">
            <div className="text-center relative z-30">
              <h2 className="text-3xl z-40 sm:text-4xl lg:text-5xl sm:leading-[50px] lg:leading-[60px] font-bold mb-4 text-[#ececec]">
                About Us

              </h2>
              <Description className="px-3">
                Learn more about us. Our mission, team & future goals.
              </Description>
            </div>
          </div>
        </header>
        <main>
          <section className="py-12 md:py-20">
            <div className=" grid gap-8 lg:grid-cols-2 px-3">
              <div>
                <h2 className="text-3xl title-color pb-4">Our Mission</h2>
                <p className="mt-4 text-primaryColor">At our company, we</p>
                <Description className="!text-[20px] !leading-relaxed gray-description">
                  Our core values of integrity, excellence, and customer
                  satisfaction guide everything we do. We are committed to
                  building a sustainable and socially responsible business that
                  makes a positive impact on the world.r core values of
                </Description>
              </div>

              <ContactUs />
            </div>
          </section>

          {/* team */}
          <OurTeam />

          {/* social links  */}
          <Socials />
        </main>
      </div>
  );
};

export default AboutUs;







const ContactUs = () => {
  return (
    <div className="">
      <h2 className="text-3xl title-color pb-4 ">Contact Us</h2>
      <div className="mt-4 space-y-4 gray-description !text-[18px]">
        <div>
          <h3 className="title-color mt-4 mb-2">Phone</h3>
          <p>+1 (555) 555-555</p>
        </div>
        <div>
          <h3 className="title-color mt-4 mb-2">Email</h3>
          <p>info@company.com</p>
        </div>
        <div>
          <h3 className="title-color mt-4 mb-2">Address</h3>
          <p>123 Main Street, Anytown USA 12345</p>
        </div>
      </div>
      <div className="mt-8">
      <div className="mt-8">
        <h3 className="font-semibold">Find Us</h3>
        <div className="mt-4 aspect-video overflow-hidden bg-[#18221431] rounded-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345092927!2d144.9537353159042!3d-37.81627974202151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5776e1f83b9bc14!2s123%20Main%20Street%2C%20Anytown%20USA%2012345!5e0!3m2!1sen!2sbd!4v1605163445201!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            // allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
      </div>
    </div>
  );
};

// team
const OurTeam = () => {
  return (
    <section className="  bg-[#18221431] rounded-lg">
      <Container className="px-4">
        <div className="">
          <h2 className="flex justify-start md:justify-center  text-3xl">Meet our Team</h2>
          <div className="mt-8 space-y-4 grid gap-8 justify-center justify-self-center md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-[#262d254a] p-8 rounded-lg w-[100%] sm:w-[80%] lg:w-[100%] mx-auto">
              <img
                src={product}
                width={50}
                height={80}
                alt="John Doe"
                style={{ aspectRatio: "80 / 80", objectFit: "cover" }}
                className="size-14 mb-6 rounded-full object-cover mx-auto"
              />
              <div className="text-center space-y-3">
                <h3 className="text-lg font-semibold title-color pb-4">
                  John Doe
                </h3>
                <p className="text-primaryColor pb-4 italic">
                  CEO and Co-Founder
                </p>
                <p className="mt-2 gray-description">John is a </p>
              </div>
            </div>
            <div className="bg-[#262d254a] p-8 rounded-lg w-[100%] sm:w-[80%] lg:w-[100%] mx-auto">
              <img
                src={product}
                width={50}
                height={80}
                alt="Jane Smith"
                className="size-14 mb-6 rounded-full object-cover mx-auto"
                style={{ aspectRatio: "80 / 80", objectFit: "cover" }}
              />
              <div className="text-center space-y-3">
                <h3 className="text-lg font-semibold  title-color pb-4  ">
                  Jane Smith
                </h3>
                <p className="text-primaryColor pb-4 italic">CTO and </p>
                <p className="mt-2 gray-description leading-[31px]">
                  Jane is a technical visionary with a deep understanding of
                  cutting-edge technologies and a proven track record of
                  delivering complex software projects.
                </p>
              </div>
            </div>
            <div className="bg-[#262d254a] p-8 rounded-lg w-[100%] sm:w-[80%] lg:w-[100%] mx-auto">
              <img
                src={product}
                width={50}
                height={80}
                alt="Michael Johnson"
                style={{ aspectRatio: "80 / 80", objectFit: "cover" }}
                className="size-14 mb-6 rounded-full object-cover mx-auto"
              />
              <div className="text-center space-y-3">
                <h3 className="text-lg font-semibold title-color pb-4  ">
                  Michael Johnson
                </h3>
                <p className="text-primaryColor pb-4 italic">Head of Product</p>
                <p className="mt-2 gray-description">Michae</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};




const Socials = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="container">
        <div className="mt-8 flex justify-center gap-8">
          <a
            className="text-muted-foreground dark:text-background hover:text-primary dark:hover:text-primary-foreground"
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-14 text-white bg-primaryLight p-4 rounded-full hover:bg-primaryLightHover smooth-transition"
            >
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
            </svg>
            <span className="sr-only">Twit</span>
          </a>
          <a
            className="text-muted-foreground dark:text-background hover:text-primary dark:hover:text-primary-foreground"
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-14 text-primaryColor bg-primaryLight p-4 rounded-full hover:bg-primaryLightHover smooth-transition"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width={4} height={12} x={2} y={9} />
              <circle cx={4} cy={4} r={2} />
            </svg>
            <span className="sr-only">Link</span>
          </a>
          <a
            className="text-muted-foreground dark:text-background hover:text-primary dark:hover:text-primary-foreground"
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-14 text-white bg-primaryLight p-4 rounded-full hover:bg-primaryLightHover smooth-transition"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
            <span className="sr-only">Fac</span>
          </a>
          <a
            className="text-muted-foreground dark:text-background hover:text-primary dark:hover:text-primary-foreground"
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-14 text-primaryColor bg-primaryLight p-4 rounded-full hover:bg-primaryLightHover smooth-transition"
            >
              <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
            <span className="sr-only">Instagram</span>
          </a>
        </div>
      </div>
    </section>
  );
};
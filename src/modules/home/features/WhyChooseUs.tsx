import React from "react";
import featuresData from "../data"; // Adjust the path based on your project structure
import Container from "../../../shared/layouts/Container";


const WhyChooseUs: React.FC = () => {
  return (
    <section>

        <div>
          <div className="relative h-[350px]">
            <img src={'https://i.pinimg.com/564x/bb/e9/05/bbe9058c1ee0e28e2e90aba2b8c31ffb.jpg'} className={'absolute w-full h-full object-cover inset-0  '} alt="" />
            <div className="z-20 relative  text-center">

          <h2 className="text-4xl font-bold text-center mb-4 pt-11">
            Why Choose Drivex?
          </h2>
        <p className="text-[#d0d0d0] text-lg">You are alwaWelcome in our drivers good luck for you</p>

            </div>

          </div>

      <Container>
        <div className="-mt-52 relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresData.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center bg-[#252525] text-white rounded-lg p-6 py-11 shadow-lg"
              >
                

                {/* gradient title and description */}
                {feature.gradient ? (
                  <div className="flex flex2 items-end mb-2">
                    <h3 className="text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
                      72
                    </h3>
                    <span className="text-5xl">hrs</span>
                  </div>
                ) : 
                
                // image , title description
                (
                  feature.image && (
                    <img src={feature.image} className="w-24 mb-4" alt="" />
                  )
                )}

                <h2 className="text-3xl text-gray-100 mt-8">
                  {feature.subtitle}
                </h2>
                <h3 className="text-2xl  font-bold mb-2">{feature.title}</h3>
                <p className="mt-4 text-center text-xl text-[#a6a5a5]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
        </div>
    </section>
  );
};

export default WhyChooseUs;
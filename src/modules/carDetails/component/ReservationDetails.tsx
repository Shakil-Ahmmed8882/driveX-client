import React from 'react';

const ReservationDetails = () => {
  return (
    <div className="bg-dark-900 text-white  space-y-8">
      {/* Section 1 */}
      <section>
        <h2 className="text-xl font-semibold  pb-3">Refueling</h2>
        <p className=" mt-2 description leading-loose">
          Self-driving cars are the natural extension of active safety and
          obviously something we should do. It's a never-ending battle of making
          your cars better and also trying to be better yourself.
        </p>
      </section>

      {/* Section 2 */}
      <section>
        <h2 className="text-xl font-semibold  pb-3">No Smoking</h2>
        <p className=" mt-2 description leading-loose">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of using
          Lorem Ipsum is that it has a more-or-less normal distribution of letters,
          as opposed to using 'Content here, content here', making it look like
          readable English.
        </p>
      </section>

      {/* Section 3 */}
      <section>
        <h2 className="text-xl font-semibold  pb-3">Reservation Price Includes</h2>
        <ul className="list-disc pl-5  mt-2 description leading-loose space-y-1">
          <li>Collision Damage Waiver (CDW) Excess to GBP 1,500.00</li>
          <li>Full Theft Protection Excess to GBP 1,500.00</li>
          <li>Full Unrestricted Mileage</li>
          <li>Vehicle Licensing Fee & Road Tax</li>
          <li>VAT Included</li>
        </ul>
      </section>

      {/* Section 4 */}
      <section>
        <h2 className="text-xl font-semibold  pb-3">Reservation Price Excludes</h2>
        <ul className="list-disc pl-5  mt-2 description leading-loose space-y-1">
          <li>Super Personal Accident Insurance GBP 6.00 per person</li>
          <li>Windscreen, Glass, and Tyres GBP 5.00 per rental</li>
        </ul>
      </section>
      
      {/* Add more sections as needed */}
      {/* Section 5 */}
      <section>
        <h2 className="text-xl font-semibold  pb-3">Additional Information</h2>
        <p className=" mt-2 description leading-loose">
          Ensure to review all the terms and conditions before confirming your reservation. 
          Please be aware that additional charges may apply depending on the selected options.
        </p>
      </section>

    </div>
  );
};

export default ReservationDetails;
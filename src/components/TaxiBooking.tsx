import React from "react";

// Define the type for the taxi card data
type TaxiCardProps = {
  model: string;
  location: string;
  initialCharge: string;
  perMile: string;
  perTraffic: string;
  passengers: string;
};

// TaxiCard component
const TaxiCard: React.FC<TaxiCardProps> = ({
  model,
  location,
  initialCharge,
  perMile,
  perTraffic,
  passengers,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-80 text-center">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">{model}</h3>
      <p className="text-lg text-gray-600 mb-2">{location}</p>
      <p className="text-md text-gray-700 mb-1">
        Initial Charge: {initialCharge}
      </p>
      <p className="text-md text-gray-700 mb-1">Per Mile/UXL: {perMile}</p>
      <p className="text-md text-gray-700 mb-1">
        Per Stepped Traffic: {perTraffic}
      </p>
      <p className="text-md text-gray-700 mb-4">Passengers: {passengers}</p>
      <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
        Book a Taxi
      </button>
    </div>
  );
};

// Main TaxiBooking component
const TaxiBooking: React.FC = () => {
  // Data for the taxi cards
  const taxiData: TaxiCardProps[] = [
    {
      model: "BMW X5 2008",
      location: "CHICAGO",
      initialCharge: "$2.50",
      perMile: "$4.20",
      perTraffic: "$1.50",
      passengers: "4 Person",
    },
    {
      model: "BMW X5 2008",
      location: "CHICAGO",
      initialCharge: "$2.50",
      perMile: "$4.20",
      perTraffic: "$1.50",
      passengers: "4 Person",
    },
    {
      model: "BMW X5 2008",
      location: "CHICAGO",
      initialCharge: "$2.50",
      perMile: "$4.20",
      perTraffic: "$1.50",
      passengers: "4 Person",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          SHUETA PLAN THAT SUITS
        </h1>
        <h2 className="text-2xl text-gray-700 mb-8">
          Choose Your Taxi to Ride!
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {taxiData.map((taxi, index) => (
            <TaxiCard key={index} {...taxi} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaxiBooking;

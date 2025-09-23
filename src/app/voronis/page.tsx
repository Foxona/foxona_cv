"use client";
import Head from "next/head";
import { FaMapMarkerAlt, FaBuilding, FaIdCard, FaEnvelope } from "react-icons/fa";

export default function Voronis() {
  const services = [
    "Software consultancy for manufacturing and logistics",
    "Manufacturing services",
    "Supply chain optimization",
    "Custom software solutions for production environments",
    "International sourcing and procurement"
  ];

  return (
    <div className="bg-tile print:m-0 print:bg-inherit print:px-0 print:py-0 md:px-5 md:py-10">
      <Head>
        <title>Voronis</title>
      </Head>
      <div className="mx-auto max-w-4xl rounded-md bg-white p-4 shadow-md print:p-0 print:shadow-none md:p-10">
        <div className="flex flex-col justify-between">
          <div className="flex flex-col md:flex-row md:justify-between">
            <div>
              <h1 className="text-4xl font-bold">Voronis</h1>
              <h2 className="text-2xl font-semibold">Software Consultancy & Manufacturing Liaison</h2>
            </div>

            <div className="mt-4 md:mt-0">
              <div className="flex items-center mb-2">
                <FaMapMarkerAlt className="mr-2 text-gray-600" />
                <span>Amsterdam, The Netherlands</span>
              </div>
              <div className="flex items-center mb-2">
                <FaBuilding className="mr-2 text-gray-600" />
                <span>Established 2023</span>
              </div>
              <div className="flex items-center mb-2">
                <FaIdCard className="mr-2 text-gray-600" />
                <span>VAT: NL004769666B41</span>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="mr-2 text-gray-600" />
                <a href="mailto:info@voronis.nl" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                  info@voronis.nl
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="mb-4 text-xl font-semibold">About Voronis</h3>
            <p className="text-lg mb-6">
              Voronis can provide specialized consultancy services that bridge the gap between digital
              solutions and physical production. Based in Amsterdam, we facilitate seamless connections
              between software systems and manufacturing processes, enabling businesses to optimize
              their operations without managing the complexities of production infrastructure.
            </p>

            <h3 className="mb-4 text-xl font-semibold">Our Services</h3>
            <ul className="mt-1 list-disc pl-5 mb-8">
              {services.map((service, i) => (
                <li key={i} className="mb-2">{service}</li>
              ))}
            </ul>

            <p className="text-lg mb-6">
              We maintain a selective client portfolio, working with partners who value
              innovation and efficiency in their manufacturing. Reach out to us at <a href="mailto:info@voronis.nl" className="font-medium hover:underline">
                info@voronis.nl</a> to discuss how we can help you achieve your production goals.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

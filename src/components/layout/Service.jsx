import Card from "../Card";
import { services } from "../../mock/service.js";

export default function Service() {
  return (
    //<!-- Page Container -->
    <div className="flex items-center justify-center min-h-screen bg-white py-8">
      <div className="flex flex-col mt-8 max-w-7xl px-4">
        <div className="flex flex-wrap justify-center text-center mb-24">
          <div className="w-full lg:w-6/12 px-4">
            <h1 className="text-gray-900 text-4xl font-bold mb-8">
              Mis servicios
            </h1>
            <p className="text-gray-700 text-lg font-light">
              Una pequeña descripcion introductoria
            </p>
          </div>
        </div>

        <div className="flex flex-wrap">
          {services.map((service) => (
            <div className="w-full md:w-6/12 lg:w-2/6 mb-6 px-6 sm:px-6 lg:px-4 ">
              <Card data={service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

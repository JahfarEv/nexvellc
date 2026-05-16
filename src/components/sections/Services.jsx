import { services } from "../../data/services";
import ServiceCard from "../common/ServiceCard";

const Services = () => {
  return (
    <section id="services" className="py-12 px-6">

      {/* Web Applications */}
      <div className="mb-10">
        <h2 className="text-xl font-bold mb-4">
          {services.webApplications.title}
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {services.webApplications.items.map((item, i) => (
            <ServiceCard key={i} service={item} />
          ))}
        </div>
      </div>

      {/* Business Websites */}
      <div>
        <h2 className="text-xl font-bold mb-4">
          {services.businessWebsites.title}
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {services.businessWebsites.items.map((item, i) => (
            <ServiceCard key={i} service={item} />
          ))}
        </div>
      </div>

    </section>
  );
};

export default Services;
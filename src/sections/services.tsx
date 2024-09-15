import ServiceCard from "../components/service-card";
import { services } from "../constants";

const Services = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {services.map((service) => (
        <ServiceCard key={service.label} service={service} />
      ))}
    </section>
  );
};

export default Services;

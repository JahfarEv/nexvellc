const ServiceCard = ({ service }) => {
  return (
    <div className="p-5 border rounded-xl shadow">
      <h3 className="font-bold">{service.name}</h3>
      <p className="text-sm text-gray-500">{service.description}</p>
    </div>
  );
};

export default ServiceCard;